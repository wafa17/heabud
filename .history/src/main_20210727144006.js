import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueCardCarousel from './components/VueCardCarousel.vue'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false

// firebase.initializeApp({
//  Configurações do seu app
// })

// export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

const plugin = {
  install (Vue, options) {
    Vue.component(VueCardCarousel.name, VueCardCarousel)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
export { VueCardCarousel }