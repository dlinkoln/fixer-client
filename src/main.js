import Vue from "vue";
import Vuelidate from "vuelidate";
import VueRouter from "vue-router";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
