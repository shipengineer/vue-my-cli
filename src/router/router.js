import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "",
    meta: { layout: "main" },
    component: () => import("../views/HomeView.vue"),
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
    meta: { layout: "main" },
    component: () => import("../views/DetailRecord.vue"),
  },
  {
    path: "/history",
    name: "history",
    meta: { layout: "main" },
    component: () => import("../views/History.vue"),
  },
  {
    path: "/planing",
    name: "planing",
    meta: { layout: "main" },
    component: () => import("../views/Planing.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main" },
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/record",
    name: "record",
    meta: { layout: "main" },
    component: () => import("../views/Record.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
