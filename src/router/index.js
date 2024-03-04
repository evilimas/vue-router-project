import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import JobsView from '../views/jobs/JobsView.vue';
import JobDetails from '../views/jobs/JobDetails.vue';
import NotFound from '../views/NotFound.vue';
import UnitConverter from '../views/UnitConverter.vue';
import PasswordGenerator from '../views/PasswordGenerator.vue';
import BoredBot from '../views/BoredBot.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
  },
  {
    path: '/unit-converter',
    name: 'unitConverter',
    component: UnitConverter,
  },
  {
    path: '/password-generator',
    name: 'passwordGenerator',
    component: PasswordGenerator,
  },
  {
    path: '/bored-bot',
    name: 'boredBot',
    component: BoredBot,
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobDetails,
    props: true,
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
