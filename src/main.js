import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase';
import {config} from './helpers/firebaseConfig';
import * as firebaseui from 'firebaseui';


import store from './store/store'


Vue.config.productionTip = false

Vue.use(firebaseui);

new Vue({
  router,
  created() {
    firebase.initializeApp(config);
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
