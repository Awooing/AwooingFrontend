<template>
  <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
    <subtitle>Login</subtitle>
    <paragraph>Awooing with an account is always better :3</paragraph>
    <div class="mt-4 w-full">
      <div class="mt-2">
        <input
          type="text"
          name="price"
          id="price"
          class="block w-full py-2 px-4 sm:text-sm bg-gray-700 border-gray-300 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:border-purple-500 transition duration-150 ease-in-out"
          placeholder="Your Username"
        />
      </div>

      <div class="mt-4">
        <input
          type="password"
          name="price"
          id="price"
          class="block w-full py-2 px-4 sm:text-sm bg-gray-700 border-gray-300 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:border-purple-500 transition duration-150 ease-in-out"
          placeholder="Your Password"
        />
      </div>
    </div>
    <div class="mt-4 mb-2 sm:flex sm:flex-row-reverse">
      <Button color="purple-500" hoverColor="purple-400" px="6" py="2">
        Login
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Button from "@/components/elements/button/Button.vue"
import Paragraph from "@/components/typography/Paragraph.vue"
import Subtitle from "@/components/typography/Subtitle.vue"
export default defineComponent({
  components: {
    Button,
    Subtitle,
    Paragraph,
  },
})
</script>