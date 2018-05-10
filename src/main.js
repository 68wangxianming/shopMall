// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import { Button, Row, Col } from 'vant'
require('!style-loader!css-loader!less-loader!./common/less/global.less');


Vue.config.productionTip = false
Vue.use(Button).use(Row).use(Col)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
