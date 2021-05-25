<template>
  <div>
    <paypal-buttons
      v-bind:createOrder="createOrder"
      v-bind:onApprove="onApprove"
    ></paypal-buttons>
  </div>
</template>

<script>
import Vue from "vue";
const PayPalButton = window.paypal.Buttons.driver("vue", Vue);
export default {
  name: "Checkout",
  components: {
    "paypal-buttons": PayPalButton,
  },
  props: {
    cartTotal: {
      type: Number,
      default: 0.01,
    },
  },
  methods: {
    createOrder: function (data, actions) {
      console.log("Creating order...");
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
    onApprove: function (data, actions) {
      console.log("Order approved...");
      return actions.order.capture().then(console.log("Order complete!"));
    },
  },
};
</script>

<style>
#paypal-button-container {
  margin: 30px 0;
}
</style>
