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
import { defineComponent, reactive } from "vue"
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
    color: {
      type: String,
      default: "gray-700",
    },
    hoverColor: {
      type: String,
      default: "gray-600",
    },
    px: {
      type: String,
      default: "3",
    },
    py: {
      type: String,
      default: "2",
    },
  },
  setup(props) {
    const state = reactive({
      classes: `cursor-pointer inline-block bg-${props.color} rounded-md px-${props.px} py-${props.py} font-medium text-white hover:bg-${props.hoverColor} transition duration-100 ease-in-out`,
    })
    return state
  },
})
</script>