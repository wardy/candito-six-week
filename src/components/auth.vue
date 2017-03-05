<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
  import firebaseHelper from '../firebase';
  export default {
    mounted() {
      firebaseHelper.loadAuthUI()
    }
  }
</script>

<style lang="scss">

</style>
