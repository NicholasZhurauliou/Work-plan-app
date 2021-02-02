<template>
  <div id="app" class="app">
    <div class="app__container">
    <day-picker :current-day="day" @change-current-day="changeDay"></day-picker>
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
            :class="{routine: getClass(i, 2)}"
          ></div>
        </div>
        <div class="time-periods__body-important">
          <div 
            v-for="i in HOURS_IN_DAY"
            :key="i"
            :class="{important: getClass(i, 1)}"
          ></div>
        </div>
      </div>
    </div>
    <hr/>
    <div v-if="isDay">
      <p>{{ day }}e</p>
      <day-form @add-period="saveChanges"></day-form>
    </div>
    <p v-else>Выберите день в календаре</p>
  </div>
</template>

<script>
  import DayPicker from "./components/DayPicker.vue"
  import DayForm from "./components/DayForm.vue"
  import {HOURS_IN_DAY} from "./constants.js"
  import {getLastDayInCurrentMonth, changeNumberToTimeStr} from "./helpers.js"

  export default {
    name: "App",
    components: {
      DayPicker,
      DayForm
    },

    beforeCreate() {
      this.HOURS_IN_DAY = HOURS_IN_DAY
      this.getLastDayInCurrentMonth = getLastDayInCurrentMonth
      this.changeNumberToTimeStr = changeNumberToTimeStr
    },

    data() {
      return { 
        day: 3,
        days: this.initDays()
      }
    },

    methods: {
      initDays() {
        let result = {}
        let lastDay = this.getLastDayInCurrentMonth()

        for (let i = 1; i <= lastDay; i++) {
          let periods = [...new Array(HOURS_IN_DAY)].map(() => ({isImportant: false, isRoutine: false}))
          result[i] = periods
        }

        return result
      },

      changeDay(newDay) {
        this.day = newDay
      },

      getClass(idx, type) {
        if (this.day) {
          let key = this.getKey(type)
          return this.days[this.day][idx - 1][key]
        }
        return false
      },

      getKey(type) {
        return (type === 1) ? 'isImportant' : 'isRoutine'
      },

      saveChanges({start, end, type}) {
        console.log('save', start, end, type);
        let isValid = !!(start && end && type)

        if (isValid && (start < end)) {
          this.days[this.day].forEach((period, idx) => {
            let index = idx + 1
            if ((index >= start) && (index < end)) {
              period[this.getKey(type)] = true
            }
          })
        }
      }
    },

    computed: {
      isDay: function() {
        return this.day !== null
      }
    }
  }
</script>

<style scoped lang="scss">
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
  }
</style>