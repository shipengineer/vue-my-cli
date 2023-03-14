import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main" },
    component: () => import("../views/Categories.vue"),
  },
  {
    path: "/detailRecord",
    name: "detailRecord",
    meta: { layout: "detail" },
    component: () => import("../views/DetailRecord.vue"),
  },
  {
    path: "/history",
    name: "history",
    meta: { layout: "history" },
    component: () => import("../views/History.vue"),
  },
  {
    path: "/planing",
    name: "planing",
    meta: { layout: "planing" },
    component: () => import("../views/Planing.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "profile" },
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/record",
    name: "record",
    meta: { layout: "record" },
    component: () => import("../views/Record.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "register" },
    component: () => import("../views/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
