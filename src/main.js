// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
import 'babel-polyfill'

//引入jquery
import $ from 'jquery'
//引入axios
import axios from 'axios';
/*
* 创建axios实例
* */
/* 引入qs*/
import Qs from 'qs'
/*
* 配置axios*/
Vue.prototype.axios = axios.create({
  baseURL:' http://192.168.0.104:9001',//http://118.31.247.144:8087
  // http://192.168.0.104:9001
  timeout: 30000,
  // withCredentials: true,
  headers: {'Content-Type': 'application/x-www-form-urlencoded',"X-Requested-With": "XMLHttpRequest" },
  transformRequest: [data => {
    data = Qs.stringify(data);
    return data;
  }]
});

Vue.config.productionTip = false;

Vue.use(vueSwiper);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
