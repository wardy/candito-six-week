<template>
  <div>
    <h1>This is the week view {{$route.params.weekNumber}}</h1>
    <router-view :weeksWorkouts="week"></router-view>
  </div>
</template>

<script>
  import weekOneExercises from '../fixtures/candito-six-week-week-program.json';
  export default {
    computed: {
      week() {
        const { weekNumber } = this.$route.params;
        return weekOneExercises[weekNumber -1]
      }
    }
  }
</script>

<style lang="scss">

</style>