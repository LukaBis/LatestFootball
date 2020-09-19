import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GameVideo from "../views/GameVideo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/game/:id",
    name: "GameVideo",
    component: GameVideo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
