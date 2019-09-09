import Vue from "vue";
import Router from "vue-router";

//User
import Auth from "./components/user/Auth.vue";
import UserProfile from "./components/user/UserProfile.vue";
import SignUp from "./components/user/SignUp.vue";

//Layout
import Home from "./components/layout/Home.vue";
import Dashboard from "./components/layout/Dashboard.vue";
import Question from "./components/layout/Question.vue";
import Survey from "./components/layout/Survey.vue";
import Reports from "./components/layout/Reports.vue";

//Form
import CreateCompany from './components/forms/CreateCompany.vue'

//Lists
import CompanyList from './components/lists/CompanyList.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    //user
    { path: "/auth", component: Auth },
    { path: "/success", component: UserProfile },
    { path: "/signup", component: SignUp },

    //layout
    { path: "/", component: Home },
    { path: "/dashboard",name:"Dashboard", component: Dashboard },
    { path: "/question", component: Question },
    { path: "/survey", component: Survey },
    { path: "/reports", component: Reports },
    

    //form
    {path: "/createcompany", component: CreateCompany},

    //list
    { path: "/companylist", component: CompanyList },
  ]
});
