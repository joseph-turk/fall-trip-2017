import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Home' },
  { path: '/ireland', component: 'Ireland' },
  { path: '/ireland/dublin', component: 'Dublin' },
  { path: '/ireland/belfast', component: 'Belfast' },
  { path: '/scotland', component: 'Scotland' },
  { path: '/scotland/oban', component: 'Oban' },
  { path: '/scotland/inverness', component: 'Inverness' },
  { path: '/scotland/portree', component: 'Portree' },
  { path: '/scotland/edinburgh', component: 'Edinburgh' },
  { path: '/england', component: 'England' },
  { path: '/photos', component: 'Photos' },
  { path: '/photo/:id', component: 'SinglePhoto' },
  { path: '/photo/:id/edit', component: 'EditSinglePhoto' }
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import(`@/components/pages/${route.component}.vue`),
    meta: route.meta
  }
})

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    ...routes
  ]
})

Vue.use(Router)

export default router
