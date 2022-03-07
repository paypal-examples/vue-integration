<template>
  <div v-if="!paid" id="paypal-button-container"></div>
  <div v-else id="confirmation">Order complete!</div>
</template>

<script>
import { loadScript } from '@paypal/paypal-js';

export default {
  name: 'Checkout-Payment',
  beforeCreate: function() {
    loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
      paypal
        .Buttons({
          createOrder: this.createOrder,
          onApprove: this.onApprove,
        })
        .render('#paypal-button-container');
    });
  },
  data() {
    return {
      paid: false,
    };
  },
  props: {
    cartTotal: {
      type: Number,
      default: 0.01,
    },
  },
  methods: {
    createOrder: function(data, actions) {
      console.log('Creating order...');
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: this.cartTotal,
            },
          },
        ],
      });
    },
    onApprove: function(data, actions) {
      console.log('Order approved...');
      return actions.order.capture().then(() => {
        this.paid = true;
        console.log('Order complete!');
      });
    },
  },
};
const CLIENT_ID = 'test';
</script>

<style>
#paypal-button-container {
  margin: 30px 0;
}

#confirmation {
  color: green;
  margin-top: 1em;
  font-size: 2em;
}
</style>
