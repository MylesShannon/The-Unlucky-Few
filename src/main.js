import Vue from 'vue'
import App from './App.vue'
import VueCookie from 'vue-cookie'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueCookie)

new Vue({
  render: h => h(App)
}).$mount('#app')