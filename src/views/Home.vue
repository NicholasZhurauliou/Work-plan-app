<template>
  <div>
    <day-picker />
    <hr />
    <p v-if="!!day">{{ day }}e</p>
    <p v-else>Выберите день в календаре</p>
  </div>
</template>

<script>
import DayPicker from "../components/DayPicker.vue";

export default {
  name: "Home",
  components: {
    DayPicker
  },
  computed: {
    day() {
      return this.$store.state.day;
    }
  }
};
</script>
