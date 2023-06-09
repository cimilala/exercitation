import { useMenuStore } from "@/stores/menu";
import { createRouter, createWebHistory } from "vue-router";
import { close, start } from '@/utils/nprogress'
const routes = [
  {
    path: "/",
    name: "/",
    component: () => import("@/views/Root.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/notfound",
    component: () => import("@/views/NotFound/NotFond.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/notfound",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
 
  if (
    // 检查用户是否已登录
    !localStorage.getItem("token") &&
    // ❗️ 避免无限重定向
    to.name !== "login"
  ) {
    // 将用户重定向到登录页面
    next({ name: "login" });
  } else {
    if(to.name==="/"){
      next({ name: "home" });
    }else {
    
      next();
    }
   
  }
  start()
});
router.afterEach(() => {
  close()
})
export default router;
