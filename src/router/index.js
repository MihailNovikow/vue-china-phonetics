import { createRouter, createWebHistory } from 'vue-router'

import routes from '@/router/routes'

const preparedRoutes = Object.values(routes)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: preparedRoutes
})

export default router
