<template>
  <div>
    <day-time />
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
    },
    watch: {
      $route(to, from) {
        const prevId = from.params.id;
        const nextId = to.params.id;
        if (prevId !== nextId) {
          this.$store.commit("setDay", nextId);
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        let id = +to.params.id;
        let currentId = vm.day;
        if (!isNaN(id) && id !== currentId) {
          vm.$store.commit("setDay", id);
        }
      })
    }
  }
</script>
