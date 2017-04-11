import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Companies from '@/components/Companies'
import CompanyId from '@/components/CompanyId'
import RestAPI from '@/components/RestAPI'

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
    },
    {
      path: '/companies/:companyId',
      name: 'CompanyId',
      component: CompanyId
    },
    {
      path: '/companies/restAPI',
      name: 'RestAPI',
      component: RestAPI
    }
  ]
})
