<template>
  <div id="app">
    <Item />
    <Checkout />
  </div>
</template>

<script>
import Checkout from './components/Checkout.vue';
import Item from './components/Item.vue';

export default {
  name: 'App',
  components: {
    Checkout,
    Item
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  margin: 82px auto 32px;
  padding: 0 16px;
  max-width: 960px;
  flex-direction: column;
  align-items: center;
}
</style>
