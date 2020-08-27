<template>
  <router-view />
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "AwooToTheMoon",
  created() {
    this.$store.dispatch("app_setCurrentTitle")
  },
})
</script>
