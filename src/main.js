import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

const loadimage = require('@/assets/img/loading.gif')
const errorimage = require('@/assets/img/no-image.png')

Vue.use(VueLazyload, {
  error: errorimage,
  loading: loadimage,
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
