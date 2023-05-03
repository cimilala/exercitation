export default [
  //学生
  {
    path: "home",
    name: "home",
    component: () => import("@/views/index.vue"),
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
      roles: ["student","teacher"],
    },
  },
  {
    path: "person_apply",
    name: "person_apply",
    component: () => import("@/views/students/Person_Apply/PersonApply.vue"),
    meta: {
      title: "自主实习申请",
      roles: ["student","teacher"],
    },
  },
  {
    path: "change",
    name: "change",
    component: () => import("@/views/students/Change/Change.vue"),
    meta: {
      title: "实习变更",
      roles: ["student","teacher"],
    },
  },
  {
    path: "addChange",
    name: "addChange",
    component: () => import("@/views/students/Change/AddChange/AddChange.vue"),
    meta: {
      title: "新增实习变更",
      roles: ["student"],
    },
  },
  {
    path: "dayNews",
    name: "dayNews",
    component: () => import("@/views/students/DayNews/DayNews.vue"),
    meta: {
      title: "实习日报",
      roles: ["student"],
    },
  },
  {
    path: "addNews",
    name: "addNews",
    component: () => import("@/views/students/AddNews/AddNews.vue"),
    meta: {
      title: "新增实习日报",
      roles: ["student"],
    },
  },
  {
    path: "summary",
    name: "summary",
    component: () => import("@/views/students/Summary/Summary.vue"),
    meta: {
      title: "实习总结",
      roles: ["student"],
    },
  },

  {
    path: "grade",
    name: "grade",
    component: () => import("@/views/students/Grade/Grade.vue"),
    meta: {
      title: "实习成绩",
      roles: ["student"],
    },
  },
  {
    path: "grade_absent",
    name: "grade_absent",
    component: () =>
      import("@/views/students/Grade/GradeAbsent/GradeAbsent.vue"),
    meta: {
      title: "出勤信息",
      roles: ["student"],
    },
  },

  {
    path: "leave",
    name: "leave",
    component: () => import("@/views/students/Leave/Leave.vue"),
    meta: {
      title: "请假申请",
      roles: ["student"],
    },
  },
  {
    path: "addLeave",
    name: "addLeave",
    component: () => import("@/views/students/Leave/addLeave/addLeave.vue"),
    meta: {
      title: "新增请假",
      roles: ["student"],
    },
  },
  {
    path: "person_center",
    name: "person_center",
    component: () => import("@/views/students/PersonCenter/PersonCenter.vue"),
    meta: {
      title: "个人中心",
      roles: ["student"],
    },
  },
  {
    path: "self_edit",
    name: "selt_edit",
    component: () => import("@/views/students/SelfEdit/SelfEdit.vue"),
    meta: {
      title: "编辑资料",
      roles: ["student"],
    },
  },
  {
    path: "draft",
    name: "draft",
    component: () => import("@/views/students/Draft/Draft.vue"),
    meta: {
      title: "草稿箱",
      roles: ["student"],
    },
  },
  //教师
  
];
