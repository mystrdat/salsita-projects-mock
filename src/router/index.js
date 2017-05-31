import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/pages/PageHome'
import PageReact from '@/components/pages/PageReact'
import PageAngular from '@/components/pages/PageAngular'
import PageJavaScript from '@/components/pages/PageJavaScript'
import AppDialog from '@/components/AppDialog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/react',
      name: 'react',
      component: PageReact,
      children: [
        {
          path: 'projects',
          name: 'dialog',
          component: AppDialog
        },
        {
          path: 'projects/:slide',
          name: 'dialog',
          component: AppDialog
        }
      ]
    },
    {
      path: '/angular',
      name: 'Angular',
      component: PageAngular
    },
    {
      path: '/javascript',
      name: 'JavaScript',
      component: PageJavaScript
    }
  ]
})
