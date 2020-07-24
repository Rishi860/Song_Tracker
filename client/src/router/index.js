import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Songs from '../views/Songs/Index.vue'
import CreateSong from '../views/CreateSong.vue'
import ViewSong from '../views/ViewSong/ViewSong.vue'
import EditSong from '../views/EditSong'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs
  },
  {
    path: '/songs/create',
    name: 'create-songs',
    component: CreateSong
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: ViewSong
  },
  {
    path: '/songs/:songId/edit',
    name: 'edit',
    component: EditSong
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
