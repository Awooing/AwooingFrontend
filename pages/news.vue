<template>
  <div>
    <h2 class="page-sub">Latest News</h2>

    <div v-if="articles === null">
      <h1 style="color: white;font-size: 2rem;text-align: center">Loading... <img src="https://cdn.discordapp.com/emojis/322522663304036352.png?v=1" alt="Awoo" class="awoo"></h1>
    </div>
    <div>
      <a  v-for="article in articles" :key="article._id" class="news-block main">
        <p style="margin: 0">By {{article.userId}} &ndash; {{article.createdAt}}</p> <!-- change to username/showAs, todo backend; format date -->
        <h1>{{article.title}}</h1> 
        <p>{{article.content}}</p> <!-- truncate text, strip html -->
      </a>
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
        currentPage: 1,
        lastPage: null
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
        console.log(articles)
        this.articles = articles.data.news
        this.lastPage = articles.data.pageInfo.last
        // console.log(this.articles)
        // console.log(this.lastPage)
      }
    }
  }
</script>
