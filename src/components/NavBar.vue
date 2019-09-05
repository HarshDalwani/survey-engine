<template>
<nav class="navbar sticky navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Survey Engine</a>
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavDropdown"> 
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         User
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
           <router-link v-if="isLoggedIn" to="/auth"
           class="dropdown-item">Log Out</router-link> 
          <span v-else>
          <router-link  to="/auth"
           class="dropdown-item">Log In</router-link>
           <router-link  to="/signup"
           class="dropdown-item">Sign Up</router-link>
           </span>
        </div>
      </li>
    </ul>
    
  </div>
</nav>
</template>

<script>
export default {
  computed:{
    isLoggedIn(user){
      return this.$store.getters.user
    }
  }
}
</script>

<style>
  
</style>