import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("@/views/home");
const Category = () => import("@/views/category");
const Shopcar = () => import("@/views/shopcar");
const Profile = () => import("@/views/profile");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/Shopcar",
    component: Shopcar,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
