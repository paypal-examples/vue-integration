import Vue from 'vue'
import App from './App.vue'
import { loadScript } from '@paypal/paypal-js'

Vue.config.productionTip = false
Vue.prototype.$loadScript = loadScript

new Vue({
  render: h => h(App),
}).$mount('#app')
