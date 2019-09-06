<template>
  <div id="main">
    <nav class="navbar sticky navbar-expand-lg navbar-light bg-light">
      <span >
        <button class="btn btn-group-toggle" id="menu-toggle" @click.stop="openNav()">
          <span class="mdi mdi-view-dashboard" id="dash"></span>
        </button>
      </span>

      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>

        <div class="list-group" v-for="link in links" :key="link.text">
          <router-link :to="link.route">
            <li class="list-group-item">{{link.text}}</li>
          </router-link>
        </div>
      </div>
      <a class="navbar-brand" href="#">Survey Engine</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >User</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link
                v-if="isLoggedIn"
                to="/auth"
                class="dropdown-item"
                @click="onLogout"
              >Log Out</router-link>
              <span v-else>
                <router-link to="/auth" class="dropdown-item">Log In</router-link>
                <router-link to="/signup" class="dropdown-item">Sign Up</router-link>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi", text: "Dashboard", route: "/dashboard" },
        { icon: "folder", text: "Question", route: "/question" },
        { icon: "person", text: "Reports", route: "/reports" }
      ]
    };
  },
  computed: {
    isLoggedIn(user) {
      return this.$store.getters.user;
    }
  },
  methods: {
    /* Set the width of the side navigation to 250px */
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },

    /* Set the width of the side navigation to 0 */
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
};
</script>

<style>
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: red; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #47d3a4;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

/* #dash.onhover{
  animation-play-state: running
} */
</style>