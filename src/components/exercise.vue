<template>
  <ui-tabs type="text">
    <ui-tab :title="exercise.name">
    <table>
      <thead>
        <tr>
          <th>Weight</th>
          <th>Reps</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="set in exercise.sets">
          <td>{{set.weight}}</td>
          <td>{{set.reps}}</td>
        </tr>
      </tbody>
    </table>
    </ui-tab>
  </ui-tabs>
</template>

<script>
  export default {
    props: ['exercise']
  }
</script>

<style lang="scss">

</style>
