import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"

import Buefy from "buefy"
import "buefy/dist/buefy.css"

import Awooing from "@/assets/js/Awooing"

// @ts-ignore
import Fragment from "vue-fragment"

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(Fragment.Plugin)
Vue.use(new Awooing())

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app")
