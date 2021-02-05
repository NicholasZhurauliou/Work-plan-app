import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.filter("format", function(value) {
  let result = "";

  if (value < 10) result += 0;

  result += `${value}:00`;

  return result;
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  render: h => h(App)
}).$mount("#app");
