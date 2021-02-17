import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Search from "../views/Search.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/test",
      name: "Test",
      component: Test,
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
    },
    {
      path: "/Favorites",
      name: "Favorites",
      component: () => import("../views/Favorites.vue"),
    },

    {
      path: "/about",
      name: "About",

      /*
       * route level code-splitting
       * this generates a separate chunk (about.[hash].js) for this route
       * which is lazy-loaded when the route is visited.
       */
      component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
  ],

  router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
export default router;
