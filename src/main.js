import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import axios from "axios"
import store from './store'
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
