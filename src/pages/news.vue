<template>
  <page-title>News</page-title>
  <paragraph
    >This is where all the news are. It can be an announcement, a changelog,
    <br />
    or something from the Awoo Community Discord. We also publish Rin's articles
    here.
  </paragraph>

  <div class="pt-16">
    <div class="w-full md:mb-0 mb-6">
      <card
        v-for="(post, i) in posts"
        :key="i"
        :infoFooter="true"
        :title="post.title"
        :author="post.author.username"
        :date="post.date"
      >
        {{ truncate(post.content) }}...
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageTitle from "@/components/typography/PageTitle.vue"
import Card from "@/components/elements/card/BlogCard.vue"
import Paragraph from "@/components/typography/Paragraph.vue"
import { onMountedSetTitle } from "@/app/title"

export default defineComponent({
  name: "News",
  components: {
    PageTitle,
    Card,
    Paragraph,
  },
  setup() {
    onMountedSetTitle("News")

    //   Posts Mock
    const posts = [
      {
        title: "Interesting Title",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas lorem. Etiam quis quam. Integer tempor. Aenean fermentum risus id tortor. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam quis quam. Maecenas aliquet accumsan leo. Sed convallis magna eu sem. Fusce consectetuer risus a nunc. Phasellus et lorem id felis nonummy placerat. Nulla quis diam. Suspendisse nisl. ",
        createdAt: new Date(),
        author: {
          username: "sdsdf",
          slug: "sdsdf",
        },
      },
    ]

    return {
      posts,
      truncate: (text: string) => text.substring(0, 120),
    }
  },
})
</script>
