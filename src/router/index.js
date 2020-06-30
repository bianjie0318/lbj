import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Shouy from '@/components/Shouy'
import Fenl from '@/components/Fenl'
import Gouw from '@/components/Gouw'
import Ger from '@/components/Ger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:"/home/shouy",
      children:[
        {
          path: 'shouy',
          name: 'Shouy',
          component: Shouy,
        },
        {
          path: 'fenl',
          name: 'Fenl',
          component: Fenl,
        },
        {
          path: 'gouw',
          name: 'Gouw',
          component: Gouw,
        },
        {
          path: 'ger',
          name: 'Ger',
          component: Ger,
        }
      ]
    },
    
  ]
})
