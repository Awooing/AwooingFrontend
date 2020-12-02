<template>
  <router-link
    v-if="to"
    :to="to"
    class="bg-gray-700 rounded-md px-3 py-2 font-medium text-white hover:bg-gray-600 transition duration-100 ease-in-out"
  >
    <slot />
  </router-link>
  <a
    v-else
    :href="href"
    class="bg-gray-700 rounded-md px-3 py-2 font-medium text-white hover:bg-gray-600 transition duration-100 ease-in-out"
  >
    <slot
  /></a>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: "#",
    },
  },
})
</script>