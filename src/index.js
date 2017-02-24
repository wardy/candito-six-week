import Vue from 'vue';
import App from './app.vue';

const hi = () => { console.log(...arguments); }

const app = new Vue({
  router,
  render(h) {
    return h(App);
  }
});

app.$mount('#app');
