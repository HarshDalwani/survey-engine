import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import index from './modules/index'
import database from './modules/database'
import { vuexfireMutations } from 'vuexfire'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    index,
    database
   
  },
  
mutations: vuexfireMutations,
 
});
