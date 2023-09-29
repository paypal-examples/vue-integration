<script setup>
import CheckoutPayment from './components/Checkout.vue';
import CheckoutItem from './components/Item.vue';
</script>

<template>
  <div id="app">
    <h1>Buy a plant!</h1>
    <CheckoutItem />
    <CheckoutPayment />
  </div>
</template>

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
