<template>

    <div id="cart">
    <h2>Your Cart</h2>
    <img class="cartImg" src="../assets/cart.png" style=""></img>
    <ul v-if="cart.length > 0">
      <li v-for="item in cart" :key="item.id">
        <h4>{{ item.title }}</h4>
       
        <button @click="removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
    <p v-else>Your cart is empty.</p>
  </div>

</template>
<script>
export default {
    props: {
      cart: [],
    },
    computed: {
      cartTotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    methods: {
      removeFromCart(productId) {
        this.$emit("remove-from-cart", productId);
      },
    },
  };
</script>
<style scoped>
#cart {
  text-align: right;
  margin-right: 30px;
}
.cartImg
{
  width:30px;
  height:30px;
}
</style>