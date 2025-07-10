import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SongList from "@/views/SongList.vue";
import AboutPage from "@/views/AboutPage.vue";
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
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/song/:id',
    name: 'SongText',
    component: SongText
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router