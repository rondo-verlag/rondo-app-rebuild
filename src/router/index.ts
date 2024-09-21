import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SongList from "@/views/SongList.vue";
import About from "@/views/About.vue";
import SongText from "@/views/SongText.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/songlist'
  },
  {
    path: '/songlist',
    name: 'Lieder',
    component: SongList
  },
  {
    path: '/song/:id',
    name: 'Song',
    component: SongText
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
