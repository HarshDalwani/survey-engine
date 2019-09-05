import Vue from "vue";
import Router from "vue-router";

//User
import Auth from "./components/user/Auth.vue";
import AuthSuccess from "./components/user/AuthSuccess.vue";
import SignUp from "./components/user/SignUp.vue";

//Layout
import Home from "./components/layout/Home.vue";
import Dashboard from "./components/layout/Dashboard.vue";
import Question from "./components/layout/Question.vue";
import SideNav from "./components/layout/SideNav.vue";
import Survey from "./components/layout/Survey.vue";
import Reports from "./components/layout/Reports.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    //user
    { path: "/auth", component: Auth },
    { path: "/success", component: AuthSuccess },
    { path: "/signup", component: SignUp },

    //layout
    { path: "/", component: Home },
    { path: "/dashboard", component: Dashboard },
    { path: "/question", component: Question },
    { path: "/sidenav", component: SideNav },
    { path: "/survey", component: Survey },
    { path: "/reports", component: Reports }
  ]
});
