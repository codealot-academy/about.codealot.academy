import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";
import Argon from "./plugins/argon-kit";
import VueEllipseProgress from "vue-ellipse-progress";
import VueApexCharts from 'vue-apexcharts';
import { BootstrapVue } from 'bootstrap-vue'
import VueAnalytics from 'vue-analytics';

sync(store, router);

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueEllipseProgress);
Vue.use(VueApexCharts);
Vue.use(BootstrapVue);

Vue.use(VueAnalytics, {
  id: 'UA-178509994-1',
  router
});

Vue.component('apexchart', VueApexCharts);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
