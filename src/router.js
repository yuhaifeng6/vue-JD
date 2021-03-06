import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/login",
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/botnav',
      name: 'botnav',
      component: () => import('./views/BotNav.vue'),
      redirect: "/botnav/index",
      children: [
        {
          path: "index",
          name: "index",
          component: () =>import("./views/Index.vue")
        },
        {
          path: "list",
          name: "list",
          component: () =>import("./views/List.vue")
        },
        {
          path: "search",
          name: "search",
          component: () =>import("./views/Search.vue")
        },
        {
          path: "car",
          name: "car",
          meta: {
            requireAuth: true, //当有这个字段的时候，我们判断这个页面需要登录权限
          },
          component: () =>import("./views/Car.vue")
        },
        {
          path: "mine",
          name: "mine",
          meta: { 
            requireAuth: true, //当有这个字段的时候，我们判断这个页面需要登录权限
          },
          component: () =>import("./views/Mine.vue")
        },
      ]
    },
  ]
})
