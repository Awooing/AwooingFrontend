<template>
  <section class="hero is-primary">
    <div class="hero-body" style="padding: 0px !important">
      <div class="container">
        <div class="columns">
          <div class="column title-column" style>
            <h1 class="title" style="text-align: center">
              {{ title }}
            </h1>
          </div>
          <div class="column">
            <img
              src="@/assets/img/Awoos.png"
              alt="Momiji & Senko"
              style="margin-bottom: -6.5px"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"
export default Vue.extend({
  computed: mapState({
    title: (state: any) => state.title,
  }),
})
</script>
