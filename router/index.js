import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import GridView from "../components/grid/consumer";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "GridView",
      component: GridView
    },
    {
      path: "/was",
      name: "Home",
      component: Home
    }
  ]
});
