import Vue from 'vue';
import VueRouter from 'vue-router';
import 'keen-ui/dist/keen-ui.css';

import routes from './routes.js';
import App from './app.vue';

import KeenUI from 'keen-ui';

Vue.use(KeenUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
})


const app = new Vue({
  router,
  render(h) {
    return h(App);
  }
});

app.$mount('#app');
