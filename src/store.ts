import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
  },
  mutations: {
    setLogin: (state) => {
      state.isLogin = !state.isLogin
      return state.isLogin
    },
    setLogout: (state) => {
      state.isLogin = false
      return state.isLogin
    }
  },
  actions: {
    setLogin ({ commit }) {
      commit('setLogin')
    }
  },
  getters: {
    isLogin: state => {
      return state.isLogin
    }
  }
})