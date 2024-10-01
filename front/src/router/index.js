import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import { useStore } from 'vuex'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { noAuth: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const token= useStore().state.a.authToken;
//  useStore().dispatch('b/subModule/login')
//  useStore().dispatch('b/login2')

  console.log(token);
  
   
  //  explicitly return false to cancel the navigation
   if(to.meta.requiresAuth && !token) return '/'
 
    if(to.meta.noAuth && token) return '/dashboard'
 
   return true
 })

export default router
