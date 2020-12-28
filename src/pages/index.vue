<template>
  <page-title>Welcome to the Awooing Place</page-title>
  <paragraph
    >The place where we all awoo together. We also appreciate all wholesome and
    cute things :3</paragraph
  >

  <div class="pt-16">
    <div class="columns is-variable is-6">
      <div class="column is-two-thirds">
        <div class="w-full md:mb-0 mb-6">
          <awooing-stops-card v-if="art.posts === false" background="red-800">
            <p class="text-2xl text-gray-300">Posts could not be loaded.</p>
          </awooing-stops-card>

          <div v-else-if="art.posts === null" class="flex justify-center mt-4">
            <Loader />
          </div>

          <awooing-stops-card
            v-else-if="art.posts.length === 0"
            background="gray-700"
          >
            <p class="text-2xl text-gray-300">There are no available posts.</p>
          </awooing-stops-card>

          <div v-else>
            <div class="mb-3" v-for="(post, i) in art.posts" :key="i">
              <card
                v-if="post"
                :infoFooter="true"
                :title="post.title"
                :author="post.author.username"
                :date="post.date"
              >
                {{ truncate(post.content) }}...
              </card>
            </div>
            <div class="mt-12 text-right">
              <Button to="/news"> More news </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="column justify-center md:justify-end"
        style="display: flex !important"
      >
        <discord-widget />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import PageTitle from "@/components/typography/PageTitle.vue"
import Card from "@/components/elements/card/BlogCard.vue"
import AwooingStopsCard from "@/components/elements/card/AwooingStopsCard.vue"
import DiscordWidget from "@/components/global/DiscordWidget.vue"
import Button from "@/components/elements/button/Button.vue"
import Paragraph from "@/components/typography/Paragraph.vue"
import { onMountedSetTitle } from "@/app/hooks/title"
import ArticleDto from "../../../AwooingBackend/src/dto/db/ArticleDto"
import Loader from "@/components/global/Loader.vue"
import { hookArticles } from "@/app/hooks/api/articles"

export default defineComponent({
  name: "Index",
  components: {
    PageTitle,
    Card,
    DiscordWidget,
    Button,
    Paragraph,
    Loader,
    AwooingStopsCard,
  },
  setup() {
    const data = reactive({
      posts: null as ArticleDto[] | false | null,
    })

    onMountedSetTitle("The Awooing Place")

    const art = hookArticles()

    return {
      data,
      art,
      truncate: (text: string) => text.substring(0, 120),
    }
  },
})
</script>
