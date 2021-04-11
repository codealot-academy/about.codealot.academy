import Vue from "vue";
import Vuex from "vuex";
import VuexPersistance from "vuex-persist";

Vue.use(Vuex);

const _vuexLocalPersistance = new VuexPersistance({
  storage: window.localStorage,
});

const _vuexStore = new Vuex.Store({
  state: {
    token: '',
    user: null,
  },

  getters: {
    user: ({ user }) => user,
    token: ({ token }) => token,
    isAuthenticated: ({ token }) => (!!token),
    isInQuiz: ({ user, token }) => (!!token && (user.CurrentQuestion >= 0)),
  },

  mutations: {
    setUser: (state, payload) => { state.user = payload },
    setToken: (state, payload) => { state.token = payload },
  },

  actions: {
    setUser: ({ commit }, user) => {
      commit('setUser', user);
    },
    setToken: ({ commit }, token) => {
      commit('setToken', token);
    },
  },

  plugins: [_vuexLocalPersistance.plugin],
});

export default _vuexStore;
