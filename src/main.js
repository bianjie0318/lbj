// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { Swipe, SwipeItem } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from "axios"
import "../static/js/rem.js"

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(Vant);
// Vue.use(Swipe);
// Vue.use(SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
