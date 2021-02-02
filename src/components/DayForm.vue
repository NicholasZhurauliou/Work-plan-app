<template>
    <form class="day-form" @submit.prevent="onSubmit">
        <select v-model="startTime">
            <option value=0 disabled key="start_0">Начало работы</option>
            <option 
              v-for="i in (hours + 1)" 
              :value="i"
              :key="`start_${i}`"
            >
              {{ formatNumber(i - 1) }}
            </option>
        </select>
        <select v-model="endTime">
            <option value=0 disabled key="end_0">Кoнец работы</option>
            <option 
              v-for="i in (hours + 1)" 
              :value="i"
              :key="`end_${i}`"
            >
              {{ formatNumber(i - 1) }}
            </option>
        </select>
        <select v-model="typeWork">
            <option 
              v-for="{value, text} in types"
              :disabled="!value"
              :value="value"
              :key="`type_${value}`"
            >
              {{ text }}
            </option>
        </select>
        <input type="submit" value="Сохранить"/>
    </form>
</template>

<script>
    import {HOURS_IN_DAY, WORK_TYPES} from '../constants.js'
    import {changeNumberToTimeStr} from '../helpers.js'

    export default {
        name: 'DayForm',
        data() {
            return {
                startTime: 0,
                endTime: 0,
                typeWork: 0
            }
        },
        methods: {
            onSubmit() {
                let period = {
                    start: this.startTime,
                    end: this.endTime,
                    type: this.typeWork
                }

                this.$emit('add-period', period)

                this.startTime = 0
                this.endTime = 0
                this.typeWork = 0
            }
        },
        beforeCreate() {
            this.hours = HOURS_IN_DAY
            this.types = WORK_TYPES
            this.formatNumber = changeNumberToTimeStr
        }
    }
</script>

<style scoped lang="scss">
    .day-form {
        select {
            margin-right: 20px;
        }
    }
</style>