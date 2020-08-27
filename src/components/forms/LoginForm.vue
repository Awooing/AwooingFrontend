<template>
  <form @submit.prevent="onFormSubmit">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Username / Email">
          <b-input
            type="email"
            :value="form.email"
            placeholder="Ex. awooer433 / xxawoo@yawoo.com"
            required
          ></b-input>
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            :value="form.password"
            password-reveal
            placeholder="••••••"
            required
          ></b-input>
        </b-field>

        <b-checkbox>Remember me</b-checkbox>
      </section>
      <footer class="modal-card-foot">
        <div class="columns">
          <div class="column">
            <router-link to="/auth/register">Not registered yet?</router-link>
          </div>
          <div class="column has-text-right">
            <button
              class="button is-medium"
              :class="{
                'is-primary': !form.processing,
                'is-dark is-loading': form.processing,
              }"
            >
              Login
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
        identifier: "",
        password: "",

        processing: false,
      },
    }
  },
  methods: {
    onFormSubmit() {
      // todo submit
      this.toggleFormProcessing()
    },
    toggleFormProcessing() {
      this.form.processing = !this.form.processing
    },
  },
})
</script>
