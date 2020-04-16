// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueRouter from "vue-router";
import "./assets/iconfont/iconfont.css";
import axios from "axios";

// 阻止生产模式的一些消息
Vue.config.productionTip = false;
Vue.use(VueRouter);
axios.defaults.baseURL = "http://127.0.0.1:7002/"; //默认ip地址
Vue.prototype.axios = axios;
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");