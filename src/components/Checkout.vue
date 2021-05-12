<template>
<div>
  <paypal-buttons></paypal-buttons>
  </div>
</template>

<script>
import Vue from 'vue';
const PayPalButton = window.paypal.Buttons.driver("vue", Vue);
export default {
  name: 'Checkout',
  components: {
    "paypal-buttons": PayPalButton
  }
}
</script>

<style>
  #paypal-button-container {
    margin: 30px 0;
  }
</style>
