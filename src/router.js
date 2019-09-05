import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auth from './components/Auth.vue'
import AuthSuccess from './components/AuthSuccess.vue'
import SignUp from './components/SignUp.vue'

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
    {path:'/auth' , component:Auth},
    {path:'/success' , component:AuthSuccess},
    {path:'/signup' , component:SignUp},

  ]
})
