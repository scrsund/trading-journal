import { createRouter, createWebHistory } from "vue-router";

import TheDashboard from "./pages/TheDashboard.vue";
import DailyJournal from './pages/DailyJournal.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/dashboard'},
    {path: '/dashboard', component: TheDashboard},
    {path: '/dailyjournal', component: DailyJournal},
  ]
})

export default router;
