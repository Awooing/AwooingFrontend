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
    <div class="awooter">
      <div class="awooter-inner container">
        <p>
          2020 &copy;
          <a href="https://github.com/Awooing">Project Awooing</a> &bullet; All
          rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "@/assets/scss/main.scss";

import Navbar from "@/components/layout/Navbar.vue";
import Hero from "@/components/layout/Hero.vue";

export default Vue.extend({
  name: "DefaultLayout",
  components: {
    Navbar,
    Hero,
  },
});
</script>
