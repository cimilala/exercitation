import { createRouter, createWebHistory } from "vue-router";
import routesMap from "@/utils/routerMap";
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
  {
    path: "/",
    redirect: "/home",
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
    if (to.path === "/") {
      const roleName = localStorage.getItem("role_name");
      const RoutesByRole = (routes: any[], name: string) => {
        routes.forEach((item) => {
          if (item.meta.roles.includes(roleName)) {
            if (item.children) {
              router.addRoute(name, {
                path: item.path,
                name: item.path,
                meta: item.meta,
                component: item.component,
              });
              RoutesByRole(item.children, item.name);
            } else {
              router.addRoute(name, item);
            }
          }
        });
      };
      RoutesByRole(routesMap, "/");
    }

    next();
  }
});
export default router;
