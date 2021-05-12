<template>
  <div id="paypal-button-container"></div>
</template>

<script>

export default {
  name: 'Checkout',
  beforeCreate: function() {
    this.$loadScript({'client-id': CLIENT_ID})
      .then(paypal => {
        paypal.Buttons().render('#paypal-button-container')
      });
  }
}

const CLIENT_ID = 'test';


</script>

<style>
  #paypal-button-container {
    margin: 30px 0;
  }
</style>