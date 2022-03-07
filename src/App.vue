<template>
  <div id="app">
    <h1>Buy a plant!</h1>
    <Checkout-Item />
    <Checkout-Payment />
  </div>
</template>

<script>
import CheckoutPayment from './components/Checkout.vue';
import CheckoutItem from './components/Item.vue';
export default {
  name: 'App',
  components: {
    CheckoutPayment,
    CheckoutItem,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 350px;
  margin: auto;
  padding: 20px;
  position: relative;
  background: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 62px;
  font-weight: bold;
}
</style>
