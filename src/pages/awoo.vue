<template>
  <page-title>Random Awoo</page-title>
  <paragraph
    >This page shows a random image with each refresh. It’s not limited to
    Momiji, every wholesome kemonomimi is welcome.
  </paragraph>

  <div class="mt-20 flex justify-center">
    <div class="block">
      <div v-if="!state.imageLoaded">
        <p class="text-purple-400 font-medium text-3xl">Loading...</p>
      </div>
      <div v-if="state.imageSrc">
        <img
          @click.exact="loadImage"
          @click.shift="copyImageLink"
          @load="setImageLoaded"
          :src="state.imageSrc"
          alt="uwu"
          class="cursor-pointer"
        />
      </div>

      <div
        v-if="state.imageLoaded && state.previousAwoo.length !== 0"
        class="mt-8 text-center"
      >
        <Button @click="state.setPreviousAwoo">Previous Awoo</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/elements/button/Button.vue"
import PageTitle from "@/components/typography/PageTitle.vue"
import Paragraph from "@/components/typography/Paragraph.vue"
import { defineComponent, onMounted, reactive } from "vue"

export default defineComponent({
  components: { Paragraph, PageTitle, Button },
  setup() {
    const state = reactive({
      imageLoaded: false,
      imageSrc: null as string | null,
      previousAwoo: [] as string[],
    })
    async function loadImage() {
      if (state.imageSrc) state.previousAwoo.push(state.imageSrc)

      state.imageSrc = null
      state.imageLoaded = false
      //   if (state.imageSrc !== null ) TODO: show topbar

      //   const image = await axios({
      //     method: "GET",
      //     url: "http://localhost:4000/awoo",
      //   })

      // Axios response mock
      const {
        data: { path },
      } = {
        data: {
          path:
            "https://cdn.discordapp.com/attachments/765326619387756614/783821203935723550/c6b01bbc3c29d7a15c9a1a6e57ff364f633a047888cb96735dbcfef95621e665.jpg?v=" +
            Math.random(),
        },
      }

      setTimeout(() => {
        state.imageSrc = path.startsWith(`http`)
          ? path
          : `https://cdn.awooing.moe/${path}`
      }, 400)
    }
    function setImageLoaded() {
      state.imageLoaded = true
      //   hide topbar
    }
    function setPreviousAwoo() {
      if (!(state.previousAwoo.length <= 0)) {
        const awoo = state.previousAwoo[state.previousAwoo.length - 1]
        state.previousAwoo = state.previousAwoo.filter(url => url !== awoo)
      }
    }

    async function copyImageLink() {
      if (!state.imageSrc) return
      await navigator.clipboard.writeText(state.imageSrc)

      console.log("Copied", state.imageSrc)
    }

    onMounted(() =>
      setTimeout(() => {
        // Image load mock
        state.imageLoaded = true
        state.imageSrc =
          "https://cdn.discordapp.com/attachments/765326619387756614/783821203935723550/c6b01bbc3c29d7a15c9a1a6e57ff364f633a047888cb96735dbcfef95621e665.jpg"
      }, 600)
    )

    return {
      loadImage,
      setImageLoaded,
      setPreviousAwoo,
      copyImageLink,
      state,
    }
  },
})
</script>