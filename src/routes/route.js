import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/cart.vue")
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;