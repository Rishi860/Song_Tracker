import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import vuetify from './plugins/vuetify'
import store from './store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from './components/Panel'

Vue.config.productionTip = false
Vue.use(VueYouTubeEmbed)

Vue.component('panel', Panel)

sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
