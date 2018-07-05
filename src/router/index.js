import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Company from '@/components/company'
import Corporate from '@/components/corporate'
import Products from '@/components/products'
import Joinus from '@/components/joinus'
import Companymy from '@/components/company/mycompany'
import Newdetail from '@/components/company/newdetail'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active', 
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/index',
      name: '首页',
      component: Index
    },
    {
      path: '/company',
      name: '公司信息',
      component: Company,
      children:[{
        path:'/',
        redirect: {
          name:'公司信息'
        }
        //name:'schoolLevel',
        //component:SchoolLevel,
      },{
        path: '/company/mycompany',
        name: '公司信息',
        component: Companymy
      },{
        path: '/company/newdetail',
        name: '新闻详情',
        component: Newdetail
      }]
    },
    {
      path: '/corporate',
      name: '企业文化',
      component: Corporate
    },
    {
      path: '/products',
      name: '产品业务',
      component: Products
    },
    {
      path: '/joinus',
      name: '加入我们',
      component: Joinus
    }
  ]
})
