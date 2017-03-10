<template>
  <div>
    <h1>This is the workout view {{$route.params.day}}</h1>
    <template v-for="exercise in workout.exercises">
      <exercise :exercise="exercise" />
    </template>
  </div>
</template>

<script>
  import exercise from './exercise.vue';
  export default {
    computed: {
      workout: function () {
        const { dayNumber } = this.$route.params;
        return this.weeksWorkouts[dayNumber -1]
      }
    },
    components: { exercise },
    props: ['weeksWorkouts'],
  }
</script>

<style lang="scss">

</style>