<template>
  <div class="day-time">
    <div class="day-time__header">
      <div v-for="i in hoursInDay + 1" :key="`header_${i}`">
        <span>
          {{ (i - 1) | format }}
        </span>
      </div>
    </div>
    <div class="day-time__body-routine">
      <div
        v-for="i in hoursInDay"
        :key="`routine_${i}`"
        :class="{ routine: getClass(i, 2) }"
      ></div>
    </div>
    <div class="day-time__body-important">
      <div
        v-for="i in hoursInDay"
        :key="`important_${i}`"
        :class="{ important: getClass(i, 1) }"
      ></div>
    </div>
  </div>
</template>

<script>
import { HOURS_IN_DAY } from "../constants.js";

export default {
  name: "DayTime",
  computed: {
    hours() {
      let { day, days } = this.$store.state;

      if (day && day in days) {
        return days[day];
      }
      return [];
    }
  },
  methods: {
    getClass(idx, type) {
      if (this.hours.length) {
        let key = type === 1 ? "isImportant" : "isRoutine";
        return this.hours[idx - 1][key];
      }
      return false;
    }
  },
  beforeCreate() {
    this.hoursInDay = HOURS_IN_DAY;
  }
};
</script>

<style scoped lang="scss">
.day-time {
  margin-left: 10px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
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
  &__body-routine,
  &__body-important {
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
</style>
