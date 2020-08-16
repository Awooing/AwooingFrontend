import { Awooing } from "./assets/js/Awooing"

declare module "*.vue" {
	import Vue from "vue"
	export default Vue
}

declare module "vue/types/vue" {
	interface Vue {
		$awoo: Awooing
	}
}
