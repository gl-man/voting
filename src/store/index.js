/**
 * Import Libraries
 */
import Vue from 'vue'
import VuexPersistence from 'vuex-persist'
import Vuex from 'vuex'

/**
 * Use Plugins
 */
Vue.use(Vuex)

/**
 * Create Vuex Persist Object
 */
const VuexPersist = new VuexPersistence({
  storage: window.localStorage
})

/**
 * Export Vue Instance
 */
export default new Vuex.Store({
  plugins: [VuexPersist.plugin],
  state: {
    user: {
      address: null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async auth() {}
  }
})
