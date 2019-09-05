<template>
  <div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post" @submit.prevent="onSignup">
      <h2>Register</h2>
      <p class="hint-text">Create your account. It's free and only takes a minute.</p>
      <div class="form-group"></div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="Email"
          required="required"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
          required="required"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          name="confirm_password"
          placeholder="Confirm Password"
          required="required"
          v-model="confirmPassword"
          :rules="[comparePasswords]"
        />
      </div>
      <div class="form-group">
        <label class="checkbox-inline">
          <input type="checkbox" required="required" /> I accept the
          <a href="#">Terms of Use</a> &amp;
          <a href="#">Privacy Policy</a>
        </label>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
      </div>
    </form>
    <div class="text-center">
      Already have an account?
      <router-link to="/auth"><span style="color: teal">Sign In</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/success");
      }
    }
  },
  methods: {
    onSignup() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>


<style scoped>
.form-control {
  height: 40px;
  box-shadow: none;
  color: #969fa4;
}
.form-control:focus {
  border-color: #5cb85c;
}
.form-control,
.btn {
  border-radius: 3px;
}
.signup-form {
  width: 400px;
  margin: 0 auto;
  padding: 30px 0;
}
.signup-form h2 {
  color: #636363;
  margin: 0 0 15px;
  position: relative;
  text-align: center;
}
.signup-form h2:before,
.signup-form h2:after {
  content: "";
  height: 2px;
  width: 30%;
  background: #d4d4d4;
  position: absolute;
  top: 50%;
  z-index: 2;
}
.signup-form h2:before {
  left: 0;
}
.signup-form h2:after {
  right: 0;
}
.signup-form .hint-text {
  color: #999;
  margin-bottom: 30px;
  text-align: center;
}
.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #f2f3f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.signup-form .form-group {
  margin-bottom: 20px;
}
.signup-form input[type="checkbox"] {
  margin-top: 3px;
}
.signup-form .btn {
  font-size: 16px;
  font-weight: bold;
  min-width: 140px;
  outline: none !important;
}
.signup-form .row div:first-child {
  padding-right: 10px;
}
.signup-form .row div:last-child {
  padding-left: 10px;
}
.signup-form a {
  color: #fff;
  text-decoration: underline;
}
.signup-form a:hover {
  text-decoration: none;
}
.signup-form form a {
  color: #5cb85c;
  text-decoration: none;
}
.signup-form form a:hover {
  text-decoration: underline;
}
</style>