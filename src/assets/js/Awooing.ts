import { VueConstructor } from "vue/types/umd"

class Navbar {
	constructor() {
		document.addEventListener("DOMContentLoaded", this.handleNavbar)
	}

	handleNavbar = () => {
		const burgers = Array.prototype.slice.call(
			document.querySelector(".navbar-burger"),
			0
		)
		if (burgers.length > 0) {
			// oh boi we got some yummy burgers

			burgers.forEach((borgar) => {
				borgar.addEventListener("click", () => {
					const target = document.getElementById(borgar.dataset.target)
					if (target) {
						// thats him officer, thats the target

						borgar.classList.toggle("is-active")
						target.classList.toggle("is-active")
					}
				})
			})
		}
	}
}

class Themer {
	static getTheme() {
		const theme = localStorage.getItem("AwooThemeStore")
		return theme ? JSON.parse(theme).theme : "light"
	}

	static setTheme(theme: "light" | "dark") {
		localStorage.setItem(
			"AwooThemeStore",
			JSON.stringify({
				theme,
			})
		)

		const body = document.getElementById("awoo")!
		const navbar = document.getElementById("awoobar")!

		body.classList.add(`theme-${theme}`)

		if (theme === "dark" && body.classList.contains("theme-light"))
			body.classList.remove("theme-light")

		if (theme === "light" && body.classList.contains("theme-dark"))
			body.classList.remove("theme-dark")

		if (theme === "dark" && !navbar.classList.contains("is-dark"))
			navbar.classList.add("is-dark")
		if (theme === "light" && navbar.classList.contains("is-dark"))
			navbar.classList.remove("is-dark")
	}

	static setAutoTheme() {
		Themer.setTheme(Themer.getTheme())
	}
}

export class Awooing {
	init() {
		this.initNavbar()
		Themer.setAutoTheme()
	}

	initNavbar() {
		return new Navbar()
	}

	getThemer() {
		return Themer
	}
}

export class VueAwoo {
	install(Vue: VueConstructor, options: any) {
		Vue.prototype.$awoo = new Awooing()
	}
}

export default VueAwoo
