<template>
  <table class="day-picker">
    <thead>
      <tr>
        <th v-for="name in namesDaysWeek" :key="name">{{ name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="week in quentityWeek"
        :key="`week_${week}`"
        class="day-picker__week"
      >
        <td
          v-for="weekday in daysInWeek"
          :key="`day_${week}_${weekday}`"
          :class="{
            'day-picker__day': isDay(week, weekday),
            'day-picker__day-selected': currentDay === getDay(week, weekday)
          }"
          @click="isDay(week, weekday) ? onClick(getDay(week, weekday)) : null"
        >
          {{ getContent(week, weekday) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {
  getQuentityWeekInCurrentMonth,
  getFirstDayInCurrentMonthIndex,
  getLastDayInCurrentMonth
} from "../helpers.js";
import { NAMES_DAYS_WEEK, DAYS_IN_WEEK } from "../constants.js";

export default {
  name: "DayPicker",
  computed: {
    currentDay() {
      return this.$store.state.day;
    }
  },
  methods: {
    getContent(week, weekday) {
      if (this.isDay(week, weekday)) {
        return this.getDay(week, weekday);
      }
      return null;
    },
    isDay(week, weekday) {
      const currentIndex = this.getCurrentIndex(week, weekday);
      return !(currentIndex < this.startIndex || currentIndex > this.endIndex);
    },
    getDay(week, weekday) {
      return this.getCurrentIndex(week, weekday) - this.startIndex + 1;
    },
    getCurrentIndex(week, weekday) {
      return (week - 1) * this.daysInWeek + weekday;
    },
    onClick(newDay) {
      this.$store.commit("setDay", newDay);
    }
  },
  beforeCreate() {
    this.quentityWeek = getQuentityWeekInCurrentMonth();
    this.startIndex = getFirstDayInCurrentMonthIndex();
    this.endIndex = getLastDayInCurrentMonth() + this.startIndex - 1;
    this.namesDaysWeek = NAMES_DAYS_WEEK;
    this.daysInWeek = DAYS_IN_WEEK;
  }
};
</script>

<style scoped lang="scss">
.day-picker {
  th,
  td {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    text-align: center;
    user-select: none;
  }
  th {
    font-weight: normal;
  }
  &__day {
    cursor: pointer;
    &:hover {
      background-color: whitesmoke;
    }
    &-selected {
      background-color: dodgerblue;
      color: white;
      &:hover {
        background-color: dodgerblue;
      }
    }
  }
}
</style>
