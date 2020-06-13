<template>
  <div>
    <div class="title-block mb-4r">
      <h3>Welcome to the Awooing Place</h3>
      <p>Where the <img alt="Awooo" class="awoo" src="https://cdn.discordapp.com/emojis/322522663304036352.png?v=1">ers go</p>
    </div>
    <h2 class="page-sub">Latest News</h2>
    <div v-if="articles === null">
      <h1 class="loading-text">Loading... <img src="https://cdn.discordapp.com/emojis/322522663304036352.png?v=1" alt="Awoo" class="awoo"></h1>
    </div>
    <div class="columns mb-4r">
      <a v-for="article in articles" :key="article._id" class="news-block column">
        <p>By {{article.userId}} &ndash; {{article.createdAt}}</p> <!-- change to username/showAs, todo backend; format date -->
        <h1>{{article.title}}</h1> 
        <p>{{article.content}}</p> <!-- truncate text, strip html -->
      </a>
    </div>
  </div>
</template>

<script>

export default {
  head: {
    title: "Home | Awooing.moe"
  },
  data() {
    return {
      articles: null,
    }
  },
  mounted() {
    this.loadArticles()
  },
  methods: {
    async loadArticles() {
      const articles = await this.$axios({
        method: 'GET',
        url: 'http://127.0.0.1:4000/news',
        params: {
          currentPage: 1,
          perPage: 3
        }
      })
      this.articles = articles.data.news
      if (process.client) topbar.hide()
    }
  }
}
</script>
