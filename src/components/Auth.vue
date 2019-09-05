<template>
<form @submit.prevent="onSignin">
  <div class="container">
   <div class="col-sm-8 col-md-6">
    <div class="form-group" v-if="isLoggedIn">
    <label for="exampleInputEmail1" >Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" >
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary"  :disabled="loading" :loading="loading">Submit</button><br><br>
  
<button class="loginBtn loginBtn--facebook" 
:disabled="loading" :loading="loading" 
@click.prevent="onSigninFacebook">
  Login with Facebook
</button>

<button class="loginBtn loginBtn--google" 
:disabled="loading" :loading="loading" 
@click.prevent="onSigninGoogle">
  Login with Google
</button>
</div>
</div>
</form>


</template>

<script>

export default {
  data() {
    return {
      email: '',
      password:'' ,
      
    }
  },
  methods: {
      onSignin () {
        this.$store.dispatch('signUserIn',{email: this.email, password: this.password})
      },
      onSigninGoogle(){
          this.$store.dispatch('signUserInGoogle')
      },
       onSigninFacebook () {
        this.$store.dispatch('signUserInFacebook')
      },
      isLoggedIn(user){

      }
      
     
  },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/success')
        }
      }
    },
    // mounted() {
    //   //  var ui =  firebaseui.auth.AuthUI()
    //   ui.start("#firebaseui-auth-container",uiConfig);
     
      
    // }
    
  
    }


</script>

<style>
.container{
 position: relative;
 padding-left: 375px
}
/* Shared */
.loginBtn {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
}
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}


/* Facebook */
.loginBtn--facebook {
  background-color: #4C69BA;
  background-image: linear-gradient(#4C69BA, #3B55A0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354C8C;
}
.loginBtn--facebook:before {
  border-right: #364e92 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
  background-color: #5B7BD5;
  background-image: linear-gradient(#5B7BD5, #4864B1);
}


/* Google */
.loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #DD4B39;
}
.loginBtn--google:before {
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
}
.loginBtn--google:hover,
.loginBtn--google:focus {
  background: #E74B37;
}
</style>