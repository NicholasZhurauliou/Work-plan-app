<template>
  <div class="app">
    <div class="app__container">
      <div class="nav">
        <router-link to="/">Календарь</router-link> |
        <router-link :to="`/day/${day}`">Распорядок дня</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      day() {
        return this.$store.state.day;
      }
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
      padding: 20px;
    }
  }

  .nav {
    margin-bottom: 40px;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
