import Vue from 'vue'
import App from './App.vue'
import router from '../src/routes/router'
import './assets/variables.css'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

