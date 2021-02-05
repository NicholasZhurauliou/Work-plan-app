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
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    DayPicker
  },
  computed: {
    ...mapGetters(["day"])
  }
};
</script>
