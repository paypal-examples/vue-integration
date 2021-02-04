# Vue App PayPal Integration

## Get started

Install the dependencies...

```bash
cd vue-integration
npm install
```

...log in to the [developer dashboard](https://www.paypal.com/signin?returnUri=https%3A%2F%2Fdeveloper.paypal.com%2Fdeveloper%2Fapplications) and get your client ID from your default application. Change `const CLIENT_ID = 'your-client-id';` in _src/components/Checkout.vue_ so CLIENT_ID matches your sandbox client ID...

> If you need help setting up your developer dashboard or finding your client ID, follow the first step in the getting started documentation to [get API credentials](https://developer.paypal.com/docs/business/get-started/#get-api-credentials)

...then start:

```bash
npm run serve
```

Navigate to [localhost:8080](http://localhost:8080). You should see the app running.

## How It Works

The JavaScript SDK is imported via [paypal-js](https://github.com/paypal/paypal-js) in _src/components/Checkout.vue_ where we set up a div to hold the buttons. Style, payment method, and other options can be specified in `paypal.Buttons()`

## Further help

For more details and configuration options look at [paypal-js usasge](https://github.com/paypal/paypal-js#usage) and the [PayPal JavaScript SDK Complete Reference](https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-reference/)
