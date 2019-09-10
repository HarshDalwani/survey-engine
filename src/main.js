import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './helpers/firebaseConfig'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'

import vueCountryRegionSelect from 'vue-country-region-select'
import store from './store/store'


Vue.config.productionTip = false

Vue.use(firestorePlugin);
Vue.use(vueCountryRegionSelect);


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
