<template>
  <nav class="bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="block md:hidden">
            <Button @click="toggleMenu">Menu</Button>
          </div>
          <div class="hidden md:block">
            <div class="flex items-baseline space-x-4">
              <navbar-item to="/"> Home </navbar-item>
              <navbar-item to="/news">News</navbar-item>
              <navbar-item to="/council">Council</navbar-item>
              <navbar-item to="/awoo">Random Awoo</navbar-item>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <div>
              <span class="mr-3">
                <Button>Login</Button>
              </span>
              <Button>Register</Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div :class="state.menuOpen ? `block` : `hidden`" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <navbar-item to="/" :mobile="true"> Home </navbar-item>
        <navbar-item to="/news" :mobile="true">News</navbar-item>
        <navbar-item to="/council" :mobile="true">Council</navbar-item>
        <navbar-item to="/awoo" :mobile="true">Random Awoo</navbar-item>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700 flex justify-center">
        <div>
          <span class="mr-3">
            <Button>Login</Button>
          </span>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Button from "@/components/elements/button/Button.vue"
import { defineComponent, reactive } from "vue"
import NavbarItem from "./NavbarItem.vue"
export default defineComponent({
  components: {
    NavbarItem,
    Button,
  },
  setup() {
    const state = reactive({
      menuOpen: false,
    })

    function toggleMenu() {
      state.menuOpen = !state.menuOpen
    }

    return {
      toggleMenu,
      state,
    }
  },
})
</script>