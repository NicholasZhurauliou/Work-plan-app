<template>
  <DatePicker 
    :value="day"
    @input="$emit('change-day', $event)" 
    class="datepicker"
    value-type="format" 
    format="D" 
    inline
    open
  />
</template>

<script>
  import DatePicker from "vue2-datepicker";
  import "vue2-datepicker/index.css";
  import "vue2-datepicker/locale/ru";

export default {
  components: { DatePicker },
  props: ['day']
};
</script>

<style lang="scss">
  .datepicker {
    .mx-calendar-header {
      display: none;
    }
    .not-current-month {
      pointer-events: none;
      div {
        display: none;
      }
    }
  }
</style>