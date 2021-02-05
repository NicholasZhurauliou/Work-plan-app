<template>
  <form class="day-form" @submit.prevent="onSubmit">
    <select v-model="startTime">
      <option value="0" disabled key="start_0">Начало работы</option>
      <option v-for="i in hoursInDay + 1" :value="i" :key="`start_${i}`">
        {{ (i - 1) | format }}
      </option>
    </select>
    <select v-model="endTime">
      <option value="0" disabled key="end_0">Кoнец работы</option>
      <option v-for="i in hoursInDay + 1" :value="i" :key="`end_${i}`">
        {{ (i - 1) | format }}
      </option>
    </select>
    <select v-model="typeWork">
      <option
        v-for="{ value, text } in typesWork"
        :disabled="!value"
        :value="value"
        :key="`type_${value}`"
      >
        {{ text }}
      </option>
    </select>
    <input type="submit" value="Сохранить" :disabled="isDisabled" />
  </form>
</template>

<script>
import { HOURS_IN_DAY, TYPES_WORK } from "../constants.js";

export default {
  name: "DayForm",
  data() {
    return {
      startTime: 0,
      endTime: 0,
      typeWork: 0
    };
  },
  computed: {
    isDisabled() {
      return !(
        this.startTime &&
        this.endTime &&
        this.startTime < this.endTime &&
        this.typeWork
      );
    }
  },
  methods: {
    onSubmit() {
      let period = {
        start: this.startTime,
        end: this.endTime,
        type: this.typeWork
      };

      this.$store.commit("updateDays", period);

      this.startTime = 0;
      this.endTime = 0;
      this.typeWork = 0;
    }
  },
  beforeCreate() {
    this.hoursInDay = HOURS_IN_DAY;
    this.typesWork = TYPES_WORK;
  }
};
</script>

<style scoped lang="scss">
.day-form {
  select {
    margin-right: 1rem;
  }
}
</style>
