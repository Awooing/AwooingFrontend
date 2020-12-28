<template>
  <spring-spinner
    :animation-duration="2700"
    :size="50"
    color="rgb(139, 92, 246)"
  />
</template>

<script lang="ts">
import { SpringSpinner } from "epic-spinners"
import { defineComponent } from "vue"

export default defineComponent({
  components: {
    SpringSpinner,
  },
})
</script>