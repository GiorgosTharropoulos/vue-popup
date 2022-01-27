import Vue from 'vue';
import VueRouter from 'vue-router';
import PopUps from '../views/PopUps.vue';
import Display from '../views/Display.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'PopUps',
    component: PopUps,
  },
  {
    path: '/display',
    name: 'Display',
    component: Display,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
