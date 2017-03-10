<template>
  <div>
    <h1>This is the week view {{$route.params.weekNumber}}</h1>
    <router-view :weeksWorkouts="getWeek()"></router-view>
  </div>
</template>

<script>
  import weekOneExercises from '../fixtures/test.json';
  export default {
    methods: {
      getWeek() {
        const { weekNumber } = this.$route.params;
        console.log(weekOneExercises)
        return weekOneExercises[weekNumber -1]
      }
    }
  }
</script>

<style lang="scss">

</style>