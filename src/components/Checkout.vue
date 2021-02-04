<template>
  <div id="paypal-button-container"></div>
</template>

<script>
import { loadScript } from '@paypal/paypal-js';

export default {
  name: 'Checkout'
}

loadScript({'client-id': 'sb'})
  .then(paypal => {
    paypal.Buttons().render('#paypal-button-container')
  });
</script>

<style>
  #paypal-button-container {
    margin: 30px 0;
  }
</style>