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
// TypeScript declarations
// 
export type RootState = ReturnType<typeof state>

export enum RootActions {
  setTitle = "app_setTitle",
  setCurrentTitle = "app_setCurrentTitle"
}

// 
// Mutations
// 
const mutations: MutationTree<RootState> = {
  [RootActions.setTitle]: (state, value) => {
    document.title = `${value} | Awooing.moe`
    state.title = value
  },
  [RootActions.setCurrentTitle]: state =>
    (document.title = `${state.title} | Awooing.moe`),
}

// 
// Actions
// 
const actions: ActionTree<RootState, RootState> =  {
  [RootActions.setTitle]: ({ commit }, value) => commit(RootActions.setTitle, value),
  [RootActions.setCurrentTitle]: ({ commit }) => commit(RootActions.setCurrentTitle),
}

// 
// Getters
// 
const getters: GetterTree<RootState, RootState> = {
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

export default RootStore
