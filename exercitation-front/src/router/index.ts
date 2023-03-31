import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Root.vue"),
    redirect:"/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/students/Home/Home.vue"),
      },
      {
        path: "apply",
        name: "apply",
        component: () => import("@/views/students/Apply/Apply.vue"),
      },
      {
        path: "change",
        name: "change",
        component: () => import("@/views/students/Change/Change.vue"),
      },
      {
        path: "dayNews",
        name: "dayNews",
        component: () => import("@/views/students/DayNews/DayNews.vue"),
      },
      {
        path: "addNews",
        name: "addNews",
        component: () => import("@/views/students/DayNews/AddNews/AddNews.vue"),
      },
      {
        path: "summary",
        name: "summary",
        component: () => import("@/views/students/Summary/Summary.vue"),
      },
      
      {
        path: "grade",
        name: "grade",
        component: () => import("@/views/students/Grade/Grade.vue"),
      },
      {
        path: "grade_absent",
        name: "grade_absent",
        component: () => import("@/views/students/Grade/GradeAbsent/GradeAbsent.vue"),
      },
      {
        path: "leave",
        name: "leave",
        component: () => import("@/views/students/Leave/Leave.vue"),
      },
      {
        path: "person_center",
        name: "person_center",
        component: () => import("@/views/students/PersonCenter/PersonCenter.vue"),
      },
      {
        path: 'self_edit',
        name: 'selt_edit',
        component: () => import('@/views/students/SelfEdit/SelfEdit.vue'),
      },
      {
        path: 'draft',
        name: 'draft',
        component: () => import('@/views/students/Draft/Draft.vue'),
        children:[
          {
            path: 'draft_change',
            name: 'draft_change',
            component: () => import('@/views/students/Draft/DChange/DChange.vue'),
          },
          {
            path: 'draft_leave',
            name: 'draft_leave',
            component: () => import('@/views/students/Draft/DLeave/DLeave.vue'),
          },
          {
            path: 'draft_news',
            name: 'draft_news',
            component: () => import('@/views/students/Draft/Dnews/Dnews.vue'),
          },
          {
            path: 'draft_summary',
            name: 'draft_summary',
            component: () => import('@/views/students/Draft/DSummary/DSummary.vue'),
          },
        ]
      },
    ],
    
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
  
  },
 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from,next) => {
  if (
    // 检查用户是否已登录
    !localStorage.getItem("token") &&
    // ❗️ 避免无限重定向
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    next({name:"login"})
   
    
  } else  next()
   
 
})
export default router;
