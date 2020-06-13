<template>
  <div>
    <div class="container">
      <div class="awoo-wrapper">
        <h2 class="page-sub">Random Awoo</h2>
        <p>Each time you reload the page or click on the image you'll get a new awoo!</p>
        <div v-if="imageSrc === null || imageLoaded === false">
          <h1 class="loading-text">Loading... <img src="https://cdn.discordapp.com/emojis/322522663304036352.png?v=1" alt="Awoo" class="awoo"></h1>
        </div>
        <img id="awoos-image" v-if="imageSrc !== null" @click="this.loadImage" @load="this.setImageLoaded" :src="imageSrc" alt="We encountered an awooror. Please refresh.">
        <div>
          <a v-if="previousAwoo.length !== 0" @click="this.setPreviousAwoo" class="button rounded-button is-primary">Previous Awoo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: "Random Awoo | Awooing.moe"
    },
    data() {
      return {
        imageSrc: null,
        imageLoaded: false,
        previousAwoo: []
      }
    },
    mounted() {
      this.loadImage()
    },
    methods: {
      async loadImage() {
        this.imageLoaded = false
        if (this.imageSrc !== null && process.client) topbar.show()
        const image = await this.$axios({
          method: 'GET',
          url: 'http://localhost:4000/awoo'
        })
        if (this.imageSrc !== null) {
          this.previousAwoo.push(this.imageSrc)
        }
        this.imageSrc = `https://cdn.awooing.moe/${image.data.path}`
      },
      setImageLoaded() {
        this.imageLoaded = true
        if (process.client) topbar.hide()
      },
      setPreviousAwoo() {
        if (!(this.previousAwoo.length <= 0)) {
          const awoo = this.previousAwoo[this.previousAwoo.length - 1]
          this.imageSrc = awoo
          this.previousAwoo = this.previousAwoo.filter(url => url !== awoo)
        }
      }
    }
  }
</script>
