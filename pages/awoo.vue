<template>
  <div>
    <h2 class="page-sub">Random Awoo</h2>
    <p style="color: white;text-align: center;margin-bottom: 30px">Each time you reload the page or click on the image you'll get a new awoo!</p>
        <div class="container">
            <div class="awoo-wrapper" style="text-align-last: center;">
                  <div v-if="imageSrc === null || imageLoaded === false">
                    <h1 style="color: white;font-size: 2rem;text-align: center">Loading... <img src="https://cdn.discordapp.com/emojis/322522663304036352.png?v=1" alt="Awoo" class="awoo"></h1>
                  </div>
                <img id="awoos-image" style="cursor: pointer" v-if="imageSrc !== null" @click="this.loadImage" @load="this.setImageLoaded" :src="imageSrc" alt="We encountered an awooror. Please refresh.">
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
        imageLoaded: false
      }
    },
    mounted() {
      // topbar.config({barColors: {0:"#281483", .3:"#8f6ed5", 1.0:"#d782d9"}})
      this.loadImage()
    },
    methods: {
      async loadImage() {
        this.imageLoaded = false
        // topbar.show()
        const image = await this.$axios({
          method: 'GET',
          url: 'http://localhost:4000/awoo'
        })
        this.imageSrc = `https://cdn.awooing.moe/${image.data.path}`
        // .then(res => (this.imageSrc = `https://cdn.awooing.moe/${res.data.path}`))
        // axios.get('https://awooing.moe/api/v1/awoo')
        //   .then(res => (this.imageSrc = "https://cdn.awooing.moe/" + res.data.path))
        //   .then(topbar.hide())
      },
      setImageLoaded() {
        this.imageLoaded = true
      }
    }
  }
</script>
