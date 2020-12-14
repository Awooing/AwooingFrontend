<template>
  <div :class="`bg-${background} rounded-md columns`">
    <div
      class="column is-half justify-start items-center"
      style="display: flex !important"
    >
      <slot />
    </div>
    <div
      class="column is-half justify-end items-center"
      style="display: flex !important"
    >
      <img
        class="w-24 h-24 rounded-md"
        src="https://media.discordapp.net/attachments/206530953391243275/720323844656594975/FB_IMG_1591808894267.jpg"
        alt="Awooing Stops"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  props: {
    background: {
      type: String,
      default: "gray-800",
    },
  },
})
</script>