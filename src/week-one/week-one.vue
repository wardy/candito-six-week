<template>
  <div>
    <h1>Week 1 - Muscular Conditioning (W/ Moderate Difficulty)</h1>

    <h2>{{formData.startDate.toString()}}</h2>
    <div v-for="exercise in weekOneExercises">
      <exercise :exercise="exercise" />
    </div>
  </div>
</template>

<script>
  import exercise from '../components/exercise.vue'

  import weekOneExercises from '../fixtures/candito-six-week-week-one.json';

  import { round } from '../services/math';
  export default {
    data () {
      return {
        weekOneExercises
      }
    },
    components: {
      exercise
    },
    props: ['formData']
  }
</script>

<style lang="scss">

</style>
