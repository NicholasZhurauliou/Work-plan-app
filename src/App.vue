<template>
  <div id="app">
    <DatePicker :day="day" @change-day="changeDay" />
    <hr/>
    <p v-if="isDay">{{day}}e</p>
    <p v-else>Выберите день в календаре</p>
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
    },
    computed: {
      isDay: function() {
        return this.day !== null;
      }
    }
  };
</script>

<style lang="scss">
</style>
