<template>
 <div>
   <div v-if="members === null">
     <h1 style="color: white;font-size: 2rem;text-align: center">Loading... <img src="https://cdn.discordapp.com/emojis/322522663304036352.png?v=1" alt="Awoo" class="awoo"></h1>
   </div>
   <div v-if="members !== null">
    <div v-for="member in members" :key="member.id" class="council-block" style="align-items: flex-start;display: flex;text-align: left;margin: 1rem;background: rgba(0,0,0,0.3);padding: 1rem;border-radius: 10px;color: white;">
      <img style="border-radius: 4rem;min-height: 128px" :src="member.discord.avatar" :alt="member.name">
      <div style="margin-left: 1rem;color:white">
        <h4 style="margin: 0;font-size: 1.5rem">{{member.name}} <span style="font-size: 0.8rem">{{member.position}}</span></h4>
        <h3 style="font-size: .9rem;color: gray" v-html="member.about"></h3>
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
  }
}
</script>
