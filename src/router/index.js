import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '1-1',
        name: '1-1',
        component: () => import('../views/basics/index.vue')
      },
      {
        path: '2-1',
        name: '2-1',
        component: () => import('../views/vector-data/index.vue')
      },
      {
        path: '3-1',
        name: '3-1',
        component: () => import('../views/geo-tiff/index.vue')
      },
      {
        path: '4-1',
        name: '4-1',
        component: () => import('../views/vector-tiles-and-styles/index.vue')
      },
      {
        path: '5-1',
        name: '5-1',
        component: () => import('../views/webgl-point-rendering/index.vue')
      },
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
