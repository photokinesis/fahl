import Vue from 'vue'
import Router from 'vue-router'
import newCost from '@/components/newCost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newCost',
      component: newCost
    }
  ]
})
