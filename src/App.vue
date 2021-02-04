<template>
  <div class="app">
    <div class="app__container">
      <navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation.vue";

  export default {
    name: "App",
    components: {
      Navigation
    }
  }
</script>

<style scoped lang="scss">
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    &__container {
      padding: 16px;
    }
  }
</style>
