import Vue from "vue";
import Vuex from "vuex";
import { initDays } from "../helpers";
import { HOURS_IN_DAY } from "../constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    day: null,
    days: null
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("data")) {
        try {
          let data = JSON.parse(localStorage.getItem("data"));
          state.day = data.day;
          state.days = data.days;
        } catch (error) {
          localStorage.removeItem("data");
        }
      } else {
        state.days = initDays(HOURS_IN_DAY);
      }
    },
    setDay(state, newDay) {
      state.day = newDay;
      localStorage.setItem("data", JSON.stringify(state));
    },
    updateDays(state, { start, end, type }) {
      state.days[state.day].forEach((hour, idx) => {
        let index = idx + 1;

        if (index >= start && index < end) {
          let key = type === 1 ? "isImportant" : "isRoutine";
          hour[key] = true;
        }
      });
      localStorage.setItem("data", JSON.stringify(state));
    }
  },
  getters: {
    day: state => state.day
  },
  actions: {},
  modules: {}
});
