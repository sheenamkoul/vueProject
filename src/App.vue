<template>
  <div id="app">
    <h1></h1>
    <router-view :product="products" @add-to-cart="addToCart" :cart="cart" @remove-from-cart="removeFromCart" />
    <!-- <router-link to="/">Go to Home</router-link> -->
</div>
</template>
<script>
export default {
  name: 'App',
 data() {
    return {
      products: [],
      cart: [],
    };
  },
  methods: {
    addToCart(products) {   
      console.log(products);
        this.cart.push({ ...products.title});
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
