<template>
    
        <div class="container">
            <p>You are Successfully Logged In</p>
      <h4 class="headline mb-0"><b class="red--text">email :</b>{{ user.email}}</h4>
     <h4 class="headline mb-0"><b class="red--text">ID :</b> {{ user.id }}</h4>
     <h4 class="headline mb-0"><b class="red--text">ID :</b> {{ user.name }}</h4>
     <div><img v-bind:src= user.photoUrl ></div>

     <button class="btn btn-primary" @click.prevent="onLogout">LogOut</button>
     </div>

</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    methods: {
        onLogout(){
            this.$store.dispatch('logout')
            this.$router.push('/')
        }
    },
  }
</script>