<template>
  <div>
    <div class="main-body">
      <Hero />
      <Navbar />
      <div class="container">
        <div class="inner-body">
          <router-view />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import "@/assets/scss/main.scss"

import Navbar from "@/components/layout/Navbar.vue"
import Hero from "@/components/layout/Hero.vue"
import Footer from "@/components/layout/Footer.vue"

export default Vue.extend({
  name: "DefaultLayout",
  components: {
    Navbar,
    Hero,
    Footer,
  },
  mounted() {
    this.$awoo.init()
  },
})
</script>
