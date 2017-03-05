<template>
  <div id="app">
    <navbar></navbar>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/week-one">Go to Home</router-link>
      <button v-on:click="addItem"></button>
    <auth-component v-if="isLoggedIn"></auth-component>
    <router-view v-else :formData="formData"></router-view>
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
  }

  html {
      font-size: 100%;
  }
  h1 {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
</style>