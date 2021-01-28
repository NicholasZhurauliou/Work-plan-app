<template>
  <div id="app" class="app">
    <div class="app__container">
      <DatePicker :day="day" @change-day="changeDay" />
      <div class="time-periods">
        <div class="time-periods__header">
          <div v-for="i in (HOURS_IN_DAY + 1)" :key="i">
            <span>
              {{changeNumberToTimeStr(i - 1)}}
            </span>
          </div>
        </div>
        <div class="time-periods__body-routine">
          <div 
            v-for="i in HOURS_IN_DAY"
            :key="i"
            :class="{routine: getClass(i, '1')}"
          ></div>
        </div>
        <div class="time-periods__body-important">
          <div 
            v-for="i in HOURS_IN_DAY"
            :key="i"
            :class="{important: getClass(i, '0')}"
          ></div>
        </div>
      </div>
    </div>
    <hr/>
    <template v-if="isDay">
      <p>{{day}}e</p>
      <select v-model="startPeriod">
        <option value="" disabled key="0">Начало работы</option>
        <option 
          v-for="i in (HOURS_IN_DAY + 1)" 
          :value="`${i - 1}`"
          :key="i"
        >
          {{changeNumberToTimeStr(i - 1)}}
        </option>
      </select>
      <select v-model="endPeriod">
        <option value="" disabled key="0">Кoнец работы</option>
        <option 
          v-for="i in (HOURS_IN_DAY + 1)" 
          :value="`${i - 1}`"
          :key="i"
        >
          {{changeNumberToTimeStr(i - 1)}}
        </option>
      </select>
      <select v-model="typeWork">
        <option 
          v-for="type in typeWorks"
          :disabled="type.value === ''"
          :value="type.value"
          :key="type.value"
        >
          {{type.text}}
        </option>
      </select>
      <button @click="saveChanges">Сохранить</button>
    </template>
    <p v-else>Выберите день в календаре</p>
  </div>
</template>

<script>
  import DatePicker from "./components/DatePicker.vue";
  import {HOURS_IN_DAY, getLastDayInCurrentMonth, changeNumberToTimeStr} from "./constants.js";

  export default {
    name: "App",
    components: {
      DatePicker
    },

    beforeCreate () {
      this.HOURS_IN_DAY = HOURS_IN_DAY;
      this.getLastDayInCurrentMonth = getLastDayInCurrentMonth;
      this.changeNumberToTimeStr = changeNumberToTimeStr;
    },

    data () {
      return { 
        day: null,
        days: this.initDays(),
        startPeriod: '',
        endPeriod: '',
        typeWork: '',
        typeWorks: [
          { text: 'Вид работы', value: '' },
          { text: 'Важная', value: '0' },
          { text: 'Обычная', value: '1' },
        ]
      };
    },

    methods: {
      initDays () {
        let result = {};
        let lastDay = this.getLastDayInCurrentMonth();

        for (let i = 1; i <= lastDay; i++) {
          let periods = [...new Array(HOURS_IN_DAY)].map(() => ({isImportant: false, isRoutine: false}));
          result[`${i}`] = periods;
        }

        return result;
      },

      changeDay (newDay) {
        this.day = newDay;
      },

      getClass (idx, type) {
        if (this.day) {
          let key = this.getKey(type);
          return this.days[this.day][idx - 1][key];
        }
        return false;
      },

      getKey (type) {
        return (type === '0') ? 'isImportant' : 'isRoutine';
      },

      saveChanges () {
        let isSelected = !!(this.startPeriod && this.endPeriod && this.typeWork);

        if (isSelected && (+this.startPeriod < +this.endPeriod)) {
          this.days[this.day].forEach((period, idx) => {
            if ((idx >= this.startPeriod) && (idx < this.endPeriod)) {
              period[this.getKey(this.typeWork)] = true;
            }
          });

          this.typeWork = this.startPeriod = this.endPeriod = '';
        }
      }
    },

    computed: {
      isDay: function () {
        return this.day !== null;
      }
    }
  };
</script>

<style lang="scss">
  .app {
    &__container {
      display: flex;
    }
    .time-periods {
      margin-left: 50px;
      &__header {
        display: flex;
        position: relative;
        left: -10px;
         div {
           flex: 0 0 20px;
            span {
              writing-mode: vertical-rl;
              transform: rotate(-180deg);
            }
         }
      }
      &__body-routine, &__body-important {
        display: flex;
          div {
            flex: 0 0 20px;
            height: 20px;
          }
      }
      .important {
        background-color: red;
      }
      .routine {
        background-color: blue;
      }
    }
    select {
      margin-right: 20px;
    }
  }
</style>
