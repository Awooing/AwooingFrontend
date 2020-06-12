import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _09f88adf = () => interopDefault(import('..\\pages\\awoo.vue' /* webpackChunkName: "pages_awoo" */))
const _6f75cf30 = () => interopDefault(import('..\\pages\\council.vue' /* webpackChunkName: "pages_council" */))
const _b3d26ac8 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages_news" */))
const _45626c4e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _09f88adf,
    name: "awoo"
  }, {
    path: "/council",
    component: _6f75cf30,
    name: "council"
  }, {
    path: "/news",
    component: _b3d26ac8,
    name: "news"
  }, {
    path: "/",
    component: _45626c4e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
