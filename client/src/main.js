import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import vuetify from './plugins/vuetify'
import store from './store/store'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
