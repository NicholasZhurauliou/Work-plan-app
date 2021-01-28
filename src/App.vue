<template>
  <div id="app">
    <DatePicker :day="day" @change-day="changeDay" />
    <hr/>
    <template v-if="isDay">
      <p>{{day}}e</p>
      <select v-model="startPeriod">
        <option value="" disabled key="0">Начало работы</option>
        <option 
          v-for="i in 25" 
          :value="`${i - 1}`"
          :key="i"
        >
          {{changeNumberToTimeStr(i)}}
        </option>
      </select>
      <select v-model="endPeriod">
        <option value="" disabled key="0">Кoнец работы</option>
        <option 
          v-for="i in 25" 
          :value="`${i - 1}`"
          :key="i"
        >
          {{changeNumberToTimeStr(i)}}
        </option>
      </select>
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
        startPeriod: '',
        endPeriod: '',
        typeWork: '',
        typeWorks: [
          { text: 'Вид работы', value: '' },
          { text: 'Важная', value: '0' },
          { text: 'Обычная', value: '1' },
        ]
      };
    },
    methods: {
      changeDay (newDay) {
        this.day = newDay;
      },
      changeNumberToTimeStr (value) {
        value -= 1;
        return `${value < 10 ? '0' : ''}${value}:00`;
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
