import { createRouter, createWebHistory } from "vue-router"
import UMKMPage from "../pages/UMKMPage.vue"

const routes = [
  { path: "/", name: "home", component: UMKMPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
