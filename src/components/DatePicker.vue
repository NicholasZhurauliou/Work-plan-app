<template>
  <date-picker 
    @input="changeDay" 
    @open="onOpen"
    @close="onClose"
    type="time"
    class="datepicker"
    placeholder="Начало работы"
    :editable="false"
    :clearable="false"
    format="HH:mm"
    :open="open"
    :value="value"
    :shortcuts="[{text:'00:00', onClick:()=>{this.changeDay(0)}}, {text:'01:00', onClick:()=>{this.changeDay(1)}}]"
  ></date-picker>
</template>

<script>
  import DatePicker from "vue2-datepicker";
  import "vue2-datepicker/index.css";
  import "vue2-datepicker/locale/ru";

export default {
  components: { DatePicker },
  data() {
    return {
      value: null,
      open: false
    }
  },
  methods: {
    changeDay(hour) {
      this.value = new Date(2021, 1, 3, hour)
      this.open = false
    },
    onOpen() {
      this.open = true
    },
    onClose() {
      this.open = false
    }
  }
};
</script>

<style lang="scss">
  .mx-datepicker-content {
    display: none;
  }
</style>