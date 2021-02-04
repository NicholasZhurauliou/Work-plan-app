<template>
    <div class="nav">
        <router-link to="/">Календарь</router-link> |
        <router-link :to="`/day/${day}`" :class="{'disabled': !day}">Распорядок дня</router-link>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        computed: {
            day() {
                return this.$store.state.day;
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav {
        margin-bottom: 32px;
        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }

            &.disabled {
                color: #d3d3d3;
                pointer-events: none;
            }
        }
    }
</style>
