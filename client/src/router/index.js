import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import HelloWorldViews from '../views/HelloWorldViews'
import About from '../views/About'
import GameViews from '../views/GameViews'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page01',
    name: 'HelloWorldViews',
    component: HelloWorldViews
  },
  {
    path: '/page02',
    name: 'About',
    component: About
  },
  {
    path: '/game-views',
    name: 'GameViews',
    component: GameViews
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
