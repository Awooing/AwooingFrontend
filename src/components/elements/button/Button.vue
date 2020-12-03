<template>
  <router-link v-if="to" :to="to" :class="classes">
    <slot />
  </router-link>
  <a v-else-if="href" :href="href" :class="classes"> <slot /></a>
  <div v-else :href="href" :class="classes">
    <slot />
  </div>
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
      default: null,
    },
  },
  setup() {
    return {
      classes:
        "cursor-pointer inline-block bg-gray-700 rounded-md px-3 py-2 font-medium text-white hover:bg-gray-600 transition duration-100 ease-in-out",
    }
  },
})
</script>