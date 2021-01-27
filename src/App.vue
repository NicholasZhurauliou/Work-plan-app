<template>
  <div id="app">
    <DatePicker :day="day" @change-day="changeDay" />
    <hr/>
    <template v-if="isDay">
      <p>{{day}}e</p>
      <select v-model="typeWork">
        <option 
          v-for="type in typeWorks"
          :disabled="type.value === ''"
          :value="type.value"
          :key="type.value"
        >
          {{type.text}}
        </option>
      </select>
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
      return { 
        day: null,
        typeWork: '',
        typeWorks: [
          { text: 'Вид работы', value: '' },
          { text: 'Важная', value: 'important' },
          { text: 'Обычная', value: 'routine' },
        ]
      };
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
  button {
    margin-left: 10px;
  }
</style>
