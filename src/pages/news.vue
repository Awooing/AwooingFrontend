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
import { defineComponent, reactive } from "vue"
import PageTitle from "@/components/typography/PageTitle.vue"
import Card from "@/components/elements/card/BlogCard.vue"
import Paragraph from "@/components/typography/Paragraph.vue"
import { onMountedSetTitle } from "@/app/hooks/title"
import fetchArticles from "@/app/hooks/api/articles"
import ArticleDto from "../../../AwooingBackend/src/dto/db/ArticleDto"

export default defineComponent({
  name: "News",
  components: {
    PageTitle,
    Card,
    Paragraph,
  },
  setup() {
    const data = reactive({
      posts: null as ArticleDto[] | false | null,
    })
    onMountedSetTitle("News")

    const fetchData = async () => {
      const res = await fetchArticles({
        perPage: 2,
        currentPage: 1,
      })

      data.posts = res ? res.posts : res
    }

    fetchData()

    return {
      data,
      truncate: (text: string) => text.substring(0, 120),
    }
  },
})
</script>
