<template>
  <page-title>Council</page-title>
  <paragraph
    >This is the council that has won the election on 29th of April, 2020. They
    are in charge of adding new awoo emotes to the Discord server and other
    duties.
  </paragraph>

  <div class="pt-16">
    <div class="w-full md:mb-0 mb-6">
      <card
        v-for="(member, i) in council"
        :key="i"
        :name="member.name"
        :image="member.image"
      >
        {{ member.description }}
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageTitle from "@/components/typography/PageTitle.vue"
import Card from "@/components/elements/card/CouncilCard.vue"
import Paragraph from "@/components/typography/Paragraph.vue"
import { onMountedSetTitle } from "@/app/hooks/title"

export default defineComponent({
  name: "Council",
  components: {
    PageTitle,
    Card,
    Paragraph,
  },
  setup() {
    onMountedSetTitle("Awoo Council")

    const council = [
      {
        name: "Tokichii",
        description: "awoo",
        image:
          "https://cdn.discordapp.com/avatars/227266184737849366/9fa72e62d2ee2171b4f0d51627dd7fa0",
      },
    ]

    return {
      council,
    }
  },
})
</script>
