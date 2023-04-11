export default [
  {
    path: "home",
    name: "home",
    component: () => import("@/views/students/Home/Home.vue"),
    meta: {
      title: "首页",
      roles: ["admin", "student", "teacher"],
    },
  },
  {
    path: "apply",
    name: "apply",
    component: () => import("@/views/students/Apply/Apply.vue"),
    meta: {
      title: "实习申请",
      roles: ["admin", "student", "teacher"],
    },
  },
  {
    path: "change",
    name: "change",
    component: () => import("@/views/students/Change/Change.vue"),
    meta: {
      title: "实习变更",
      roles: ["admin", "student", "teacher"],
    },
  },
  {
    path: "dayNews",
    name: "dayNews",
    component: () => import("@/views/students/DayNews/DayNews.vue"),
    meta: {
      title: "首页",
      roles: ["admin", "student", "teacher"],
    },
  },
  {
    path: "addNews",
    name: "addNews",
    component: () => import("@/views/students/DayNews/AddNews/AddNews.vue"),
    meta: {
      title: "实习日报",
      roles: ["admin", "student", "teacher"],
    },
  },
  {
    path: "summary",
    name: "summary",
    component: () => import("@/views/students/Summary/Summary.vue"),
    meta: {
      title: "实习总结",
      roles: ["admin", "student", "teacher"],
    },
  },

  {
    path: "grade",
    name: "grade",
    component: () => import("@/views/students/Grade/Grade.vue"),
    meta: {
      title: "实习成绩",
      roles: ["admin", "student", "teacher"],
    },
  },
  {
    path: "grade_absent",
    name: "grade_absent",
    component: () =>
      import("@/views/students/Grade/GradeAbsent/GradeAbsent.vue"),
    meta: {
      title: "出勤信息",
      roles: ["admin", "student", "teacher"],
    },
  },
  {
    path: "leave",
    name: "leave",
    component: () => import("@/views/students/Leave/Leave.vue"),
    meta: {
      title: "请假申请",
      roles: ["admin", "student", "teacher"],
    },
  },
  {
    path: "person_center",
    name: "person_center",
    component: () => import("@/views/students/PersonCenter/PersonCenter.vue"),
    meta: {
      title: "个人中心",
      roles: ["admin", "student", "teacher"],
    },
  },
  {
    path: "self_edit",
    name: "selt_edit",
    component: () => import("@/views/students/SelfEdit/SelfEdit.vue"),
    meta: {
      title: "编辑资料",
      roles: ["admin", "student", "teacher"],
    },
  },
  {
    path: "draft",
    name: "draft",
    component: () => import("@/views/students/Draft/Draft.vue"),
    meta: {
      title: "草稿箱",
      roles: ["admin", "student", "teacher"],
    },
    children: [
      {
        path: "draft_change",
        name: "draft_change",
        component: () => import("@/views/students/Draft/DChange/DChange.vue"),
        meta: {
          title: "变更草稿",
          roles: ["admin", "student", "teacher"],
        },
      },
      {
        path: "draft_leave",
        name: "draft_leave",
        component: () => import("@/views/students/Draft/DLeave/DLeave.vue"),
        meta: {
          title: "请假草稿",
          roles: ["admin", "student", "teacher"],
        },
      },
      {
        path: "draft_news",
        name: "draft_news",
        component: () => import("@/views/students/Draft/Dnews/Dnews.vue"),
        meta: {
          title: "日报草稿",
          roles: ["admin", "student", "teacher"],
        },
      },
      {
        path: "draft_summary",
        name: "draft_summary",
        component: () => import("@/views/students/Draft/DSummary/DSummary.vue"),
        meta: {
          title: "总结草稿",
          roles: ["admin", "student", "teacher"],
        },
      },
    ],
  },
];
