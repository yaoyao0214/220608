import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooder: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooder: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooder: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooder: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
