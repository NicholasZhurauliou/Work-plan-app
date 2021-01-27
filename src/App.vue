<template>
  <div id="app">
    <DatePicker :day="day" @change-day="changeDay" />
  </div>
</template>

<script>
  import DatePicker from "./components/DatePicker.vue";

  export default {
    name: "App",
    components: {
      DatePicker
    },
    data () {
      return { day: '27'};
    },
    methods: {
      changeDay (newDay) {
        this.day = newDay;
      }
    }
  };
</script>

<style lang="scss">
</style>
