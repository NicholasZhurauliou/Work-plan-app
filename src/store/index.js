import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    day: null
  },
  mutations: {
    setDay(state, newDay) {
      state.day = newDay
    }
  },
  actions: {},
  modules: {}
});
