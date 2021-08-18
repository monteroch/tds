import { SHOW_LOGIN } from '../types';

const appModule = {
  state: {
    showLogin: true
  },

  actions: {
    showLogin({commit}, value){
      commit(SHOW_LOGIN, value);
    }
  },

  mutations: {
    [SHOW_LOGIN](state, payload){
      state.showLogin = payload;
    }
  }
}

export default appModule;