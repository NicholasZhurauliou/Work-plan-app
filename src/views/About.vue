<template>
  <div>
    <day-time :times="[]"></day-time>
    <day-form v-if="!!day" />
  </div>
</template>
<script>
  import DayTime from "../components/DayTime.vue";
  import DayForm from "../components/DayForm.vue";

  export default {
    components: {
      DayTime,
      DayForm
    },
    computed: {
      day() {
        return this.$store.state.day;
      }
    }
  }
</script>
