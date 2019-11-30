import Vue from 'vue'
import App from './App'
import VueMapboxAutocomplete from '../'

Vue.use(VueMapboxAutocomplete)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
