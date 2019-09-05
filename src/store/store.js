import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import index from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    index
  }
});
