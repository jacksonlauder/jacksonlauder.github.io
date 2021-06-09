import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";
import Projects from "../views/Projects.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },

  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },

  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
