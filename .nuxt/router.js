import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c57efb6e = () => interopDefault(import('../pages/awoo.vue' /* webpackChunkName: "pages/awoo" */))
const _0c15f0be = () => interopDefault(import('../pages/council.vue' /* webpackChunkName: "pages/council" */))
const _395ec206 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _99f480a2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/awoo",
    component: _c57efb6e,
    name: "awoo"
  }, {
    path: "/council",
    component: _0c15f0be,
    name: "council"
  }, {
    path: "/news",
    component: _395ec206,
    name: "news"
  }, {
    path: "/",
    component: _99f480a2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
