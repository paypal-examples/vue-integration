<template>
  <div id="paypal-button-container"></div>
</template>

<script>
export default {
  name: "Checkout",
  beforeCreate: function () {
    this.$loadScript({ "client-id": CLIENT_ID }).then((paypal) => {
      paypal
        .Buttons({
          createOrder: this.createOrder,
          onApprove: this.onApprove,
        })
        .render("#paypal-button-container");
    });
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

const CLIENT_ID = "test";
</script>

<style>
#paypal-button-container {
  margin: 30px 0;
}
</style>