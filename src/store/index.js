import Vue from "vue";
import Vuex from "vuex";
import { initDays } from  "../helpers";
import { HOURS_IN_DAY } from "../constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    day: null,
    days: initDays(HOURS_IN_DAY)
  },
  mutations: {
    setDay(state, newDay) {
      state.day = newDay;
    },
    updateDays(state, {start, end, type}) {
      state.days[state.day].forEach((hour, idx) => {
        let index = idx + 1;

        if ((index >= start) && (index < end)) {
          let key = (type === 1) ? 'isImportant' : 'isRoutine';
          hour[key] = true;
        }
      })
    }
  },
  actions: {},
  modules: {}
});
