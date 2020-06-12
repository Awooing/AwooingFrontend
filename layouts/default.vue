<template>
  <div>
    <div class="main-body">
      <section class="hero is-primary">
        <div class="hero-body" style="padding: 0px !important;">
          <div class="container">
            <div class="columns">
              <div class="column title-column" style="">
                <h1 class="title" style="text-align: center">
                  The Awooing Place
                </h1>
              </div>
              <div class="column">
                <img src="https://awooing.moe/static/img/Awoos.png" alt="Momiji & Senko" style="margin-bottom: -6.5px;">
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="main-nav">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="main-nav" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="/">
                Home
              </a>
              <a class="navbar-item" href="/news">
                News
              </a>
              <a class="navbar-item" href="/council">
                Council
              </a>
              <a class="navbar-item" href="/awoo">
                Random Awoos
              </a>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary rounded-button">
                    Register
                  </a>
                  <a class="button is-primary rounded-button">
                    Log in
                  </a>
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
        <p>2020 &copy; <a href="https://github.com/Awooing">Project Awooing</a> &bullet; All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import '@nuxtjs/bulma'
  import '../assets/main.scss'

  export default {
    loading: {

    },
    head: {
      script: [
        { src: 'http://localhost:3000/navbar.js' }
      ]
    }
  }
</script>
