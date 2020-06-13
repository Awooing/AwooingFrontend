<template>
  <div>
    <h2 class="page-sub">Latest News</h2>
    <div v-if="articles === null">
      <h1 class="loading-text">Loading... <img src="https://cdn.discordapp.com/emojis/322522663304036352.png?v=1" alt="Awoo" class="awoo"></h1>
    </div>
    <div v-if="currentPage > lastPage"></div>
    <div>
      <a  v-for="article in articles" :key="article._id" class="news-block main">
        <p>By {{article.userId}} &ndash; {{article.createdAt}}</p> <!-- change to username/showAs, todo backend; format date -->
        <h1>{{article.title}}</h1> 
        <p>{{article.content}}</p> <!-- truncate text, strip html -->
      </a>
    </div>
    <div class="pages-navigation">
      <p>Page {{currentPage}}/{{lastPage}} &bullet; Showing {{articleCount}} articles</p>
      <div>
        <span v-for="p in pagination" :key="p"><nuxt-link :to="`/news?page=${p}`" class="button rounded-button is-primary">{{p}}</nuxt-link></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: "News | Awooing.moe"
    },
    data() {
      return {
        articles: null,
        articleCount: 0,
        currentPage: this.$route.query.page !== null && this.$route.query.page !== undefined && !(this.$route.query.page <= 0) ? this.$route.query.page : 1,
        lastPage: null,
        pagination: 0
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
            currentPage: this.currentPage, // todo: take it from url
            perPage: 10
          }
        })
        this.articles = articles.data.news
        this.lastPage = articles.data.pageInfo.last
        this.articleCount = articles.data.news.length
        this.pagination = this.lastPage < 10 ? this.lastPage : 10 
        if (process.client) topbar.hide()
      }
    }
  }
</script>
