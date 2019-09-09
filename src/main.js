import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './helpers/firebaseConfig'
import firebase from 'firebase'

// import {config} from './helpers/firebaseConfig'
// import * as firebaseui from 'firebaseui';
import { firestorePlugin } from 'vuefire'
// import axios from 'axios';

import store from './store/store'


Vue.config.productionTip = false

// Vue.use(firebaseui);
Vue.use(firestorePlugin);
// Vue.use(axios);

new Vue({
  router,
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        // this.$router.push('/success')
      } 
      
    })
    
   },
  store,
  render: h => h(App)
}).$mount('#app')
