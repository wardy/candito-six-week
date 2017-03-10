import HomeVue from './home/home.vue';
import WeekVue from './components/week.vue';
import WorkoutVue from './components/workout.vue';
import SignInVue from './components/auth.vue';

export default [
  { path: '/', component: HomeVue },
  { path: '/week/:weekNumber', component: WeekVue,
    children: [
      { path: 'day/:dayNumber', component: WorkoutVue }
    ]
  },
  { path: '/sign-in', component: SignInVue }
];
