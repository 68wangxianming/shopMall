import Vue from 'vue'
import App from './App'
import router from './router'
import {Button, Row, Col, Search, Swipe, SwipeItem, Lazyload, List, Field, NavBar} from 'vant'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import url from '@/api/serviceAPI.config'
// import 'lib-flexible'
// require('!style-loader!css-loader!less-loader!./common/less/global.less');

Vue.config.productionTip = false
Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.axios = axios
Vue.prototype.url = url


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
