import HomeVue from './home/home.vue';
import WeekOneVue from './week-one/week-one.vue';
import SignInVue from './components/auth.vue';

export default [
  { path: '/', component: HomeVue },
  { path: '/week-one', component: WeekOneVue },
  { path: '/sign-in', component: SignInVue }
];
