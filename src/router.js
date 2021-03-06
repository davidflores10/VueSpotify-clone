import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home/Home.vue'
import Search from "./components/Search/Search";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
  ]
})
