import { createRouter, createWebHistory } from "vue-router";

import TheDashboard from "./pages/TheDashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/dashboard'},
    {path: '/dashboard', component: TheDashboard}
  ]
})

export default router;
