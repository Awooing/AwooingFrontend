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
import { defineComponent } from "vue"
import PageTitle from "@/components/typography/PageTitle.vue"
import Card from "@/components/elements/card/BlogCard.vue"
import DiscordWidget from "@/components/global/DiscordWidget.vue"
import Button from "@/components/elements/button/Button.vue"
import Paragraph from "@/components/typography/Paragraph.vue"
import { onMountedSetTitle } from "@/app/title"

export default defineComponent({
  name: "Index",
  components: {
    PageTitle,
    Card,
    DiscordWidget,
    Button,
    Paragraph,
  },
  setup() {
    onMountedSetTitle("The Awooing Place")

    // Newest Post Mock
    const post = {
      title: "Interesting Title",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas lorem. Etiam quis quam. Integer tempor. Aenean fermentum risus id tortor. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam quis quam. Maecenas aliquet accumsan leo. Sed convallis magna eu sem. Fusce consectetuer risus a nunc. Phasellus et lorem id felis nonummy placerat. Nulla quis diam. Suspendisse nisl. ",
      createdAt: new Date(),
      author: {
        username: "sdsdf",
        slug: "sdsdf",
      },
    }

    return {
      post,
      truncate: (text: string) => text.substring(0, 120),
    }
  },
})
</script>
