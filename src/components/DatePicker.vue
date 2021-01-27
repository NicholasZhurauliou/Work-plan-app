<template>
  <DatePicker 
    v-model="day" 
    class="datepicker"
    value-type="format" 
    format="DD" 
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
  props: {},
  data () {
    return { day: null };
  }
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