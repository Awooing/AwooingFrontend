<template>
 <div>
   <div v-if="members === null">
     <h1 class="loading-text">Loading... <img src="https://cdn.discordapp.com/emojis/322522663304036352.png?v=1" alt="Awoo" class="awoo"></h1>
   </div>
   <div v-if="members !== null">
    <div v-for="member in members" :key="member.id" class="council-block">
      <img :src="member.discord.avatar" :alt="member.name">
      <div>
        <h4>{{member.name}} <span>{{member.position}}</span></h4>
        <h3 v-html="member.about"></h3> 
        <!-- parse awoo emotes -->
      </div>
    </div>
   </div>
 </div>
</template>


<script>

export default {
  head: {
    title: "Awoo Council | Awooing.moe"
  },
  data() {
    return {
      members: null
    }
  },
  async mounted() {
    const members = await this.$axios({
          method: 'GET',
          url: 'http://localhost:4000/council'
    })
    this.members = members.data.members
    if (process.client) topbar.hide()
  }
}
</script>
