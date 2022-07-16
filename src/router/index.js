import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SportNews from '../views/SportNews.vue';
import RegularNews from '../views/RegularNews.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sports-news',
    name: 'SportNews',
    component: SportNews
  },
  {
    path: '/regular-news',
    name: 'RegularNews',
    component: RegularNews
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
