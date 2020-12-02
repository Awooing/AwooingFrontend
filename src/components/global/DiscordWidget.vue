<template>
  <div class="shadow-2xl" style="height: max-content">
    <iframe
      :src="`https://discord.com/widget?id=${id}&theme=${theme}`"
      :height="height"
      allowtransparency="true"
      frameborder="0"
      class="w-full"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  props: {
    id: {
      type: String,
      default: "206530953391243275",
    },
    height: {
      type: String,
      default: "500",
    },
    theme: {
      type: String,
      default: "dark",
    },
  },
})
</script>