<template>
  <div id="app">
    <navbar />
      <button v-on:click="addItem"></button>
    <router-view :formData="formData"></router-view>
  </div>
</template>

<script>
import firebaseHelper from './firebase';
import navbarComponent from './components/navbar.vue';
import authComponent from './components/auth.vue';

const firebaseDatabase = firebaseHelper.getFirebaseDatabase();

export default {
  components: {
    'auth-component': authComponent,
    'navbar': navbarComponent
  },
  data () {
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
  }
}
</script>

<style lang="scss">
  *,
  *::before,
  *::after {
      box-sizing: border-box;
      font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  body {
    margin: 0
  }

  html {
      font-size: 100%;
  }
</style>