import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Companies from '@/components/Companies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/companies',
      name: 'Companies',
      component: Companies
    }
  ]
})
