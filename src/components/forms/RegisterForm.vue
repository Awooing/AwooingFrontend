<template>
	<form @submit.prevent="onFormSubmit">
		<div class="modal-card" style="width: auto;">
			<header class="modal-card-head">
				<p class="modal-card-title">Register</p>
			</header>
			<section class="modal-card-body">
				<b-field label="Username">
					<b-input
						type="email"
						:value="email"
						required
						placeholder="Ex. Awooer1234"
					/>
				</b-field>

				<b-field label="Email">
					<b-input
						type="email"
						:value="email"
						required
						placeholder="Ex. awooer@gmail.com"
					/>
				</b-field>

				<b-field label="Password">
					<b-input
						type="password"
						:value="password"
						password-reveal
						required
						placeholder="••••••"
					/>
				</b-field>

				<b-field label="Repeat password">
					<b-input
						type="password"
						:value="password"
						password-reveal
						required
						placeholder="••••••"
					/>
				</b-field>
			</section>
			<footer class="modal-card-foot">
				<div class="columns">
					<div class="column">
						<router-link to="/auth/login">Already registered?</router-link>
					</div>
					<div class="column has-text-right">
						<button
							class="button is-medium"
							:class="{
								'is-primary': !form.processing,
								'is-dark is-loading': form.processing,
							}"
						>
							Register
						</button>
					</div>
				</div>
			</footer>
		</div>
	</form>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
	name: "RegisterForm",
	data() {
		return {
			form: {
				username: "",
				email: "",
				password: "",
				repeat: "",

				processing: false,
			},
		}
	},
	methods: {
		onFormSubmit() {
			// todo submit
		},
	},
})
</script>
