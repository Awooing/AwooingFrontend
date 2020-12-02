import Vue from "vue"
import Vuex, { ActionTree, GetterTree, MutationTree } from "vuex"

// 
// Vuex Store
// 
Vue.use(Vuex)

// 
// State
// 
export const state = () => ({
  title: "The Awooing Place",
})

// 
// Mutations
// 
const mutations: MutationTree<Root.State> = {
  [Root.Actions.setTitle]: (state, value) => {
    document.title = `${value} | Awooing.moe`
    state.title = value
  },
  [Root.Actions.setCurrentTitle]: state =>
    (document.title = `${state.title} | Awooing.moe`),
}

// 
// Actions
// 
const actions: ActionTree<Root.State, Root.State> =  {
  [Root.Actions.setTitle]: ({ commit }, value) => commit(Root.Actions.setTitle, value),
  [Root.Actions.setCurrentTitle]: ({ commit }) => commit(Root.Actions.setCurrentTitle),
}

// 
// Getters
// 
const getters: GetterTree<Root.State, Root.State> = {
  getTitle: (state) => state.title
}

// 
// Modules
// 
const modules = {}

// 
// Root Store
// 
const RootStore = new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
})

// 
// TypeScript declarations
// 
export namespace Root {
  export type State = ReturnType<typeof state>
  export enum Actions {
    setTitle = "app_setTitle",
    setCurrentTitle = "app_setCurrentTitle"
  }
}

export default RootStore
