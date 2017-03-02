<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
  import firebaseHelper from '../firebase';
  import firebaseui from 'firebaseui'
  import 'firebaseui/dist/firebaseui.css'

  const firebaseAuth = firebaseHelper.getFirebaseAuth();
  const uiConfig = firebaseHelper.getFirebaseAuthUIConfig();
  const ui = new firebaseui.auth.AuthUI(firebaseAuth);
  ui.start('#firebaseui-auth-container', uiConfig);
</script>

<style lang="scss">

</style>
