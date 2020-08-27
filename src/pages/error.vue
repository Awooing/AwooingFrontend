<template>
  <div class="awoorror-wrapper">
    <h1>404</h1>
    <h2>Oops, looks like you awooed to an unknown place.</h2>
    <nuxt-link to="/" class="go-back">Go Home</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Error",
  created() {
    // todo: set title
  },
})
</script>

<style lang="scss" scoped>
.awoorror-wrapper {
  text-align: center;
  color: white;
  & > h1 {
    color: white;
    opacity: 0.4;
    font-size: 8rem;
    font-weight: bold;
    letter-spacing: 25px;
  }
  & > h2 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  & > .go-back {
    color: white;
    border-radius: 30px;
    text-decoration: none;
    padding: 6px 20px;
    transition: all 0.18s ease-in-out;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #8f53ee !important;
    &:hover {
      color: #8f53ee !important;
      background-color: transparent !important;
      border: 1px solid #8f53ee !important;
    }
  }
}
</style>
