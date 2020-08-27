import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "The Awooing Place",
  },
  mutations: {
    APP_MUT_SET_TITLE: (state, value) => {
      document.title = `${value} | Awooing.moe`
      state.title = value
    },
    APP_MUT_SET_CURRENT: state =>
      (document.title = `${state.title} | Awooing.moe`),
  },
  actions: {
    app_setTitle: ({ commit }, value) => commit("APP_MUT_SET_TITLE", value),
    app_setCurrentTitle: ({ commit }) => commit("APP_MUT_SET_CURRENT"),
  },
  modules: {},
})
