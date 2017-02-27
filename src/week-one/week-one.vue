<template>
  <div>
    <h1>Week 1 - Muscular Conditioning (W/ Moderate Difficulty)</h1>

    <h2>{{formData.startDate.toString()}}</h2>
    <div v-for="exercise in weekOneExercises">
      <exercise :exercise=exercise />
    </div>
  </div>
</template>

<script>
  import exercise from '../components/exercise.vue'
  export default {
    data () {
      return {
        weekOneExercises: [
          {
            name: "Squat",
            warmUpSets: true,
            sets: [
              { reps: 6, weight: this.formData.squatOneRepMax * 0.8},
              { reps: 6, weight: this.formData.squatOneRepMax },
              { reps: 6, weight: this.formData.squatOneRepMax },
              { reps: 6, weight: this.formData.squatOneRepMax }
            ],
          },
          {
            name: "Deadlift",
            warmUpSets: true,
            sets: [
              { reps: 6, weight: this.formData.deadliftOneRepMax },
              { reps: 6, weight: this.formData.deadliftOneRepMax }
            ],
          },
          {
            name: "Optional Exercise 1",
            warmUpSets: true,
            sets: [
              { reps: "8-12", weight: null },
              { reps: "8-12", weight: null },
              { reps: "8-12", weight: null }
            ],
          },
          {
            name: "Optional Exercise 2",
            warmUpSets: true,
            sets: [
              { reps: "8-12", weight: null },
              { reps: "8-12", weight: null },
              { reps: "8-12", weight: null }
            ],
          }
        ]
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
