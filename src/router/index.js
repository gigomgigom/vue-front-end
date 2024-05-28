import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Ch02ComponentRouting from './Ch02ComponentRouting';
import Ch03DataBinding from "./Ch03DataBinding";
import Ch04EventHandlingWatch from "./Ch04EventHandlingWatch";
import Ch05DataDelivery from "./Ch05DataDelivery";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...Ch02ComponentRouting,
  ...Ch03DataBinding,
  ...Ch04EventHandlingWatch,
  ...Ch05DataDelivery
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
