<template>
  <div>
    <div class="main-body">
      <section class="hero is-primary">
        <div class="hero-body" style="padding: 0px !important;">
          <div class="container">
            <div class="columns">
              <div class="column title-column" style>
                <h1 class="title" style="text-align: center">The Awooing Place</h1>
              </div>
              <div class="column">
                <img
                  src="https://awooing.moe/static/img/Awoos.png"
                  alt="Momiji & Senko"
                  style="margin-bottom: -6.5px;"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
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
              <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
              <nuxt-link to="/news" class="navbar-item">News</nuxt-link>
              <nuxt-link to="/council" class="navbar-item">Council</nuxt-link>
              <nuxt-link to="/awoo" class="navbar-item">Awoo Pics</nuxt-link>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a
                    class="button is-primary rounded-button"
                    @click="isComponentRegisterModalActive = true"
                  >Register</a>
                  <a
                    class="button is-primary rounded-button"
                    @click="isComponentLoginModalActive = true"
                  >Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="inner-body">
          <nuxt />
        </div>
      </div>
    </div>
    <div class="awooter">
      <div class="awooter-inner container">
        <p>
          2020 &copy;
          <a href="https://github.com/Awooing">Project Awooing</a> &bullet; All rights reserved.
        </p>
      </div>
    </div>

    <b-modal
      :active.sync="isComponentLoginModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <login-form v-bind="formProps"></login-form>
    </b-modal>
    <b-modal
      :active.sync="isComponentRegisterModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <register-form v-bind="formProps"></register-form>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import '@/assets/scss/main.scss'

export default Vue.extend({

});
</script>
