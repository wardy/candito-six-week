<template>
  <div id="app">
    <p>
      <router-link to="/">Go to Home</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
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