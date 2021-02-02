<template>
  <div id="app" class="app">
    <div class="app__container">
      <day-picker :current-day="day" @change-current-day="changeDay"></day-picker>
      <day-time :times="times"></day-time>
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
  import DayPicker from './components/DayPicker.vue'
  import DayTime from './components/DayTime.vue'
  import DayForm from './components/DayForm.vue'
  import {HOURS_IN_DAY} from './constants.js'
  import {getLastDayInCurrentMonth} from './helpers.js'

  export default {
    name: 'App',
    components: {
      DayPicker,
      DayTime,
      DayForm
    },

    data() {
      return { 
        day: null,
        days: this.initDays()
      }
    },

    methods: {
      initDays() {
        let result = {}

        for (let i = 1; i <= this.lastDay; i++) {
          let periods = [...new Array(this.hours)].map(() => ({isImportant: false, isRoutine: false}))
          result[i] = periods
        }

        return result
      },

      changeDay(newDay) {
        this.day = newDay
      },

      saveChanges({start, end, type}) {
        let isValid = !!(start && end && type)

        if (isValid && (start < end)) {
          this.days[this.day].forEach((period, idx) => {
            let index = idx + 1
            if ((index >= start) && (index < end)) {
              let key = (type === 1) ? 'isImportant' : 'isRoutine'
              period[key] = true
            }
          })
        }
      }
    },

    computed: {
      isDay: function() {
        return this.day !== null
      },
      times: function() {
        if (this.day !== null) {
          return this.days[this.day]
        }
        return []
      } 
    },

     beforeCreate() {
      this.hours = HOURS_IN_DAY
      this.lastDay = getLastDayInCurrentMonth()
    }
  }
</script>

<style scoped lang="scss">
  .app {
    &__container {
      display: flex;
    }
  }
</style>