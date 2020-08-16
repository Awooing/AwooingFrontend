import Vue from "vue"
import VueRouter, { RouteConfig, RouterMode } from "vue-router"

Vue.use(VueRouter)

const mode: RouterMode = "history"

const routes: RouteConfig[] = [
	{
		path: "/",
		component: () => import("@/layouts/default.vue"),
		children: [
			{
				path: "/",
				name: "Home",
				component: () => import("@/pages/index.vue"),
			},
		],
	},
]

const router = new VueRouter({
	mode,
	routes,
	base: process.env.BASE_URL,
})

export default router
