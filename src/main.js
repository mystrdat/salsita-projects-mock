// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Meta from 'vue-meta'
import { MediaQueries } from 'vue-media-queries'
import ScrollTo from 'vue-scrollto'
import Portal from 'portal-vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
const mediaQueries = new MediaQueries()
Vue.use(mediaQueries)
Vue.use(Meta)
Vue.use(ScrollTo)
Vue.use(Portal)
Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'app-container',
  'view-container',
  'dialog-container',
  'grid-container',
  'parallax-container',
  'app-carousel'
]

new Vue({
  el: '#app',
  router,
  mediaQueries: mediaQueries,
  template: '<App/>',
  components: { App }
})
