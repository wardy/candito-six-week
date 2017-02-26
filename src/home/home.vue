<template>
  <div class="home">
    <h1>Candito 6 Week Strength Program</h1>

    <h2>When do you want to start the program?</h2>
    <ui-datepicker
      picker-type="popover"
      placeholder="Select a date"
      v-model="formData.startDate"
    >Program Start Date</ui-datepicker>

    <h2>What measurement system do you want to use?</h2>
    <ui-radio-group
      name="measurementSystem"
      :options="['lbs', 'kg']"
      v-model="formData.measurementSystem"
    >Metric or Imperial</ui-radio-group>

    <h2>What are your 1RM's?</h2>
    <ui-textbox
      floating-label
      label="Bench Press One Rep Max"
      type="number"
      v-model="formData.benchOneRepMax"
    ></ui-textbox>
    <ui-textbox
      floating-label
      label="Squat One Rep Max"
      type="number"
      v-model="formData.squatOneRepMax"
    ></ui-textbox>
    <ui-textbox
      floating-label
      label="Deadlift One Rep Max"
      type="number"
      v-model="formData.deadliftOneRepMax"
    ></ui-textbox>

    <h2>Choose Your Preferred Accessory Exercises</h2>
     <ui-select
      floating-label
      label="Upper Back Exercise #1 (horizontal pull)"
      placeholder="Select a exercise"
      :options="['Machine row', 'Dumbbell row', 'Barbell row']"
      v-model="formData.upperBackHorizontalPullAccessory"
    ></ui-select>
    <ui-select
      floating-label
      label="Shoulder Exercise"
      placeholder="Select a exercise"
      :options="['Military press', 'Seated dumbbell OHP ', 'Standing dumbbell OHP', 'Lateral dumbbell raise']"
      v-model="formData.shoulderAccessory"
    ></ui-select>
    <ui-select
      floating-label
      label="Upper Back Exercise #1 (vertical pull)"
      placeholder="Select a exercise"
      :options="['Weighted pull-up', 'Weighted chin-up', 'Lat pulldown']"
      v-model="formData.upperBackVerticalPullAccessory"
    ></ui-select>

  </div>
</template>

<script>

export default {
  data() {
    return {
      formData: {
        startDate: new Date(),
        measurementSystem: '',
        benchOneRepMax: '',
        squatOneRepMax: '',
        deadliftOneRepMax: '',
        upperBackHorizontalPullAccessory: '',
        shoulderAccessory: '',
        upperBackVerticalPullAccessory: ''
      }
    }
  },
  components: {

  }
}
</script>

<style lang="scss">


</style>
