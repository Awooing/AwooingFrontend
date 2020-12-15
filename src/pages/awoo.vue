<template>
  <page-title>Random Awoo</page-title>
  <paragraph
    >This page shows a random image with each refresh. It’s not limited to
    Momiji, every wholesome kemonomimi is welcome.
  </paragraph>

  <div class="mt-20 flex justify-center">
    <div class="block">
      <div v-if="awoo.image === null">
        <p class="text-purple-400 font-medium text-3xl"><loader /></p>
      </div>
      <div v-else-if="awoo.image === false" class="w-full h-full">
        <awooing-stops-card background="red-800">
          The image could not be loaded.
        </awooing-stops-card>
      </div>
      <div v-else>
        <img
          @click.exact="loadImage"
          @click.shift="copyImageLink"
          :src="makeCdnUrl(awoo.image.path)"
          alt="uwu"
          class="cursor-pointer"
        />
      </div>

      <div
        v-if="awoo.image && state.previousAwoo.length !== 0"
        class="mt-8 text-center"
      >
        <Button @click="setPreviousAwoo">Previous Awoo</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/elements/button/Button.vue"
import PageTitle from "@/components/typography/PageTitle.vue"
import Paragraph from "@/components/typography/Paragraph.vue"
import { defineComponent, onMounted, reactive } from "vue"
import { onMountedSetTitle, setPageTitle } from "@/app/hooks/title"
import { CdnFile } from "../../../AwooingBackend/src/fetchers/cdn.fetcher"
import { hookRandomImage } from "@/app/hooks/api/awoo"
import Loader from "@/components/global/Loader.vue"
import AwooingStopsCard from "@/components/elements/card/AwooingStopsCard.vue"

export default defineComponent({
  components: { Paragraph, PageTitle, Button, Loader, AwooingStopsCard },
  setup() {
    const state = reactive({
      previousAwoo: [] as CdnFile[],
    })

    const awoo = hookRandomImage()

    const makeCdnUrl = (path: string) =>
      path.startsWith("http") ? path : `https://cdn.awooing.moe/${path}`

    const loadImage = async () => {
      if (awoo.data.image) state.previousAwoo.push(awoo.data.image)
      awoo.data.image = null
      await awoo.refetch()
    }

    const setPreviousAwoo = () => {
      if (!(state.previousAwoo.length <= 0)) {
        const previous = state.previousAwoo[state.previousAwoo.length - 1]
        state.previousAwoo = state.previousAwoo.filter(
          img => img.path !== previous.path
        )
        awoo.data.image = previous
      }
    }

    const copyImageLink = () => {
      if (!awoo.data.image) return
      return navigator.clipboard.writeText(makeCdnUrl(awoo.data.image.path))
    }

    onMountedSetTitle("Random Awoo")

    console.log(awoo)

    return {
      loadImage,
      setPreviousAwoo,
      copyImageLink,
      makeCdnUrl,
      state,
      awoo: awoo.data,
    }
  },
})
</script>