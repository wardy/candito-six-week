<template>
  <div id="app">
      <ui-toolbar type="colored" text-color="white" title="Inbox">
        <div slot="actions">
            <ui-icon-button
                color="white"
                icon="refresh"
                size="large"
                type="secondary"
            ></ui-icon-button>

            <ui-icon-button
                color="white"
                icon="search"
                size="large"
                type="secondary"
            ></ui-icon-button>

            <ui-icon-button
                color="white"
                has-dropdown
                icon="more_vert"
                ref="dropdownButton4"
                size="large"
                type="secondary"
            >
            <ui-menu
                contain-focus
                has-icons
                slot="dropdown"
                :options="['test']"
                @close="$refs.dropdownButton4.closeDropdown()"
            ></ui-menu>
            </ui-icon-button>
        </div>
    </ui-toolbar>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/week-one">Go to Home</router-link>
      <button v-on:click="addItem"></button>
    <auth-component></auth-component>
    <router-view :formData="formData"></router-view>
  </div>
</template>

<script>
import firebaseHelper from './firebase';
import authComponent from './components/auth.vue';

const firebaseDatabase = firebaseHelper.getFirebaseDatabase();
firebaseHelper.getFirebaseAuthUIConfig();

export default {
  components: {
    'auth-component': authComponent
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