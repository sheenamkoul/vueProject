<template>
<div class="product-list">
    <h1>Products</h1>
    <input
      type="search" id="searchbar"
      v-model="searchQuery"
      placeholder="Search for a product..."
      class="search-bar"
      @input="filterProducts"    />
    <button class="buttonClear" @click="handleClick('clear')" >Clear Filter</button>
    <div class="filter-button" v-for="category in categories" :key="category" >
    <button class="button" @click="handleClick(category)">{{ category  }}</button>
    </div>

    <div class="">
        <div v-if="loading">Loading products...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
            <div class="grid-container">
                <div v-for="product in filteredProducts" :key="product.id">
                
                    <img :src=" product.thumbnail" />
                    <h4> {{ product.title}}</h4>
                    <p>Price: ${{ product.price }}</p>
                    <button class="button"  @click="addToCart(product)">Add To Basket</button>
                </div>
            </div>
        </div>
    </div>
</div>


</template>

<script>

// import { inject } from "vue";
// const axios = inject('axios');
import axios from "axios";
export default {
    name: 'ProductsPage',
    data() {
        return {
            products: [],
            searchQuery: '',
            loading: true,
            error: null,
            filteredProducts:[],
            categories:[]
        };
    },
    created() {
        this.fetchProducts();
    },

    methods: {
        async fetchProducts() {
            const apiUrl = "https://dummyjson.com/products";
            try {
                const response = await axios.get(apiUrl);
                //console.log(response);
                this.products = response.data.products;
                this.filteredProducts = this.products;
                
                 this.distinctCategories();
                // console.log(this.products);
            } catch (err) {
                this.error = "Failed to load products. Please try again later.";
            } finally {
                this.loading = false;
            }
        },
        filterProducts(){
            this.filteredProducts = this.products.filter(product => {
                return product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        },

       distinctCategories(){
            this.products.forEach(product=>{
                this.categories.push(product.category);
            })
            this.categories= [...new Set(this.categories)];
       },
       
        handleClick(category) {
            if (category === "clear") {
                this.filteredProducts = this.products;
            }
            else {
                this.filteredProducts = this.products.filter(product => {
                    return product.category === category;
                });
            }
        },
        addToCart(product) {
            console.log(product);
            this.$emit("add-to-cart", product);

        },
       

    }
};
</script>

<style scoped>
.product-list {
  font-family: Arial, sans-serif;
  display: block;
}
.filter-button
{
display: inline-block;
margin:5px
}
.search-bar
{
    min-width: 300px;
}
 .grid-container {
  display: grid;
  grid: auto / auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.buttonClear
{
    background-color: #f44336;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
#searchbar
{
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    width: 50%;
    box-sizing: border-box;
}
</style>