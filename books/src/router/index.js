import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tablazat from '../views/Tablazat'
import Tablazat2 from '../views/Tablazat2'
import Tablazat3 from '../views/Tablazat3'
import Reszletek from '../views/Reszletek'
import UjKonyv from '../views/UjKonyv'
import ModositasKonyv from '../views/ModositasKonyv'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/tablazat',
    component: Tablazat
  },
  {
    path:'/tablazat2',
    component: Tablazat2
  },
  {
    path:'/tablazat3',
    component: Tablazat3
  },
  {
    path:'/reszletek/:id',
    component: Reszletek
  },
  {
    path: '/ujkonyv',
    component: UjKonyv
  },
  {
    path: '/modositas/:id',
    component: ModositasKonyv
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
