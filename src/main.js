import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'

const loadimage = require('@/assets/img/loading.gif')
const errorimage = require('@/assets/img/no-image.png')

Vue.use(VueLazyload, {
  error: errorimage,
  loading: loadimage,
  attempt: 1
})

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isCtrlLayout: false
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('isCtrlLayout') !== undefined) {
        state.isCtrlLayout = JSON.parse(localStorage.getItem('isCtrlLayout'));
      }
    },
    toggleCtrl (state) {
      state.isCtrlLayout = !state.isCtrlLayout;
      localStorage.setItem('isCtrlLayout', state.isCtrlLayout);
    },
  }
})


new Vue({
  render: h => h(App),
  store,
  beforeCreate() { this.$store.commit('initialiseStore');},
}).$mount('#app')
