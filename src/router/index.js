import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: "/detail/:id", name: "detail", component: () => import("../pages/Detail.vue") },
  { path: "/", name: "home", component: () => import("../pages/Home.vue") },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
