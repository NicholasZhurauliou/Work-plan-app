<template>
  <div id="app">
    <DatePicker :day="day" @change-day="changeDay" />
    <hr/>
    <template v-if="isDay">
      <p>{{day}}e</p>
      <button @click="saveChanges">Сохранить</button>
    </template>
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
      return { day: null};
    },
    methods: {
      changeDay (newDay) {
        this.day = newDay;
      },
      saveChanges () {
        
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
