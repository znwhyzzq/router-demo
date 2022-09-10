import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/Home.vue'
import tableData from '../views/tableData.vue'


import Open from '../views/Open.vue'

import In from '../views/In.vue'

import Hope from '../views/Hope.vue'
import about from '../views/about.vue'
export default new VueRouter({
  routes: [
    {
      path: '/Home',
      name:'Home',
      component: Home,
      children:[
    
      {
        path:'/Hope',
        name:Hope,
        component:Hope,
      },
   
     
      {
        path:'/In',
        name:In,
        component:In,

      },
   
      {
        path:'/about',
        name:about,
        component:about,
      
      }, 
      {
        path:'/tableData',
        name:tableData,
        component:tableData,
      
      }, 
    ]
    },   
      {
        path:'/',
        name:Open,
        component:Open,
        hidden:true,
      }, 
    
      
     
      
      ]
    })  
