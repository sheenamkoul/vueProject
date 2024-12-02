<template>
  <div id="app">
    <h1></h1>
  <ContainerPage :cart="cart" @remove-from-cart="removeFromCart"/>
  <ProductsPage :products="products" @add-to-cart="addToCart"/>
</div>
</template>

<script>
import ProductsPage from './components/ProductsPage.vue';
import ContainerPage from './components/ContainerPage.vue';
export default {
  name: 'App',
  components:{
    ContainerPage,
    ProductsPage,
  },
 data() {
    return {
      products: [],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {   
        this.cart.push({ ...product});
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
