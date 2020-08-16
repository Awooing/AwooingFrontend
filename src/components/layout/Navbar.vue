<template>
	<nav
		class="navbar"
		id="awoobar"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="container">
			<div class="navbar-brand">
				<a
					role="button"
					class="navbar-burger burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="main-nav"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="main-nav" class="navbar-menu">
				<div class="navbar-start">
					<router-link to="/" class="navbar-item">Home</router-link>
					<router-link to="/news" class="navbar-item">News</router-link>
					<router-link to="/council" class="navbar-item">Council</router-link>
					<router-link to="/awoo" class="navbar-item">Awoo Pics</router-link>
				</div>
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<a
								class="button is-primary rounded-button"
								@click="toggleRegister"
								>Register</a
							>
							<a class="button is-primary rounded-button" @click="toggleLogin"
								>Log in</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<BModal
			:active.sync="modals.loginOpen"
			has-modal-card
			trap-focus
			:destroy-on-hide="false"
			aria-role="dialog"
			aria-modal
		>
			<LoginForm />
		</BModal>

		<BModal
			:active.sync="modals.registerOpen"
			has-modal-card
			trap-focus
			:destroy-on-hide="false"
			aria-role="dialog"
			aria-modal
		>
			<RegisterForm />
		</BModal>
	</nav>
</template>

<script lang="ts">
import Vue from "vue"

import LoginForm from "@/components/forms/LoginForm.vue"
import RegisterForm from "@/components/forms/LoginForm.vue"

export default Vue.extend({
	name: "Navbar",
	components: {
		LoginForm,
		RegisterForm,
	},
	data() {
		return {
			modals: {
				loginOpen: false,
				registerOpen: false,
			},
		}
	},
	methods: {
		toggleLogin() {
			this.modals.loginOpen = !this.modals.loginOpen
		},
		toggleRegister() {
			this.modals.registerOpen = !this.modals.registerOpen
		},
	},
})
</script>
