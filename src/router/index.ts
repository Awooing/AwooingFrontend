import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../layouts/default.vue"),
    children: [
      {
        path: "/",
        component: () =>
          import(/* webpackChunkName: "index" */ "../pages/index.vue")
      },
      {
        path: "/news",
        component: () => import(/* webpackChunkName: "news" */ "../pages/news.vue")
      },
      {
        path: "/council",
        component: () => import(/* webpackChunkName: "council" */ "../pages/council.vue")
      },
      {
        path: "/awoo",
        component: () => import(/* webpackChunkName: "awoo" */ "../pages/awoo.vue")
      },
      {
        path: "/user/:id",
        component: () => import(/* webpackChunkName: "user_view" */ "../pages/user/_id.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
