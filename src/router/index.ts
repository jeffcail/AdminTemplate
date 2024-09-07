import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '@/stores/permiss';
import Home from '../views/home.vue';
import NProgress from 'nprogress';
import "nprogress/nprogress.css";


// 显示右上角螺旋加载提示
NProgress.configure({
  showSpinner: false,
})


const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    meta: {
      title: '登录',
      noAuth: true,
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: "dashboard",
        meta: {
          title: '驾驶舱',
          noAuth: true,
        },
        component: () => import('../views/dashboard/dashboard.vue'),
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          title: '用户管理',
          // permiss: '11',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "system-user" */ '../views/user/user.vue'),
      },
      {
        path: '/role',
        name: 'role',
        meta: {
          title: '角色管理',
          // permiss: '11',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "system-user" */ '../views/user/role.vue'),
      },
      {
        path: '/menu',
        name: 'menu',
        meta: {
          title: '菜单管理',
          // permiss: '11',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "system-user" */ '../views/user/menu.vue'),
      },
      {
        path: '/table',
        name: 'basetable',
        meta: {
          title: '基础表格',
          // permiss: '31',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "table" */ '../views/table/basetable.vue'),
      },
      {
        path: '/table-editor',
        name: 'table-editor',
        meta: {
          title: '可编辑表格',
          // permiss: '32',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "table-editor" */ '../views/table/table-editor.vue'),
      },
      {
        path: '/export',
        name: 'export',
        meta: {
          title: '导出Excel',
          // permiss: '34',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "export" */ '../views/table/export.vue'),
      },
      {
        path: '/import',
        name: 'import',
        meta: {
          title: '导入Excel',
          // permiss: '33',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "import" */ '../views/table/import.vue'),
      },
      {
        path: '/editor',
        name: 'editor',
        meta: {
          title: '富文本编辑器',
          // permiss: '291',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "editor" */ '../views/pages/editor.vue'),
      },
      {
        path: '/markdown',
        name: 'markdown',
        meta: {
          title: 'markdown编辑器',
          // permiss: '292',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "editor" */ '../views/pages/markdown.vue'),
      },
      {
        path: '/codemirror',
        name: 'codemirror',
        meta: {
          title: 'codemirror编辑器',
          // permiss: '293',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "editor" */ '../views/pages/codemirror.vue'),
      },
      {
        path: '/steps',
        name: 'steps',
        meta: {
          title: '步骤条',
          // permiss: '27',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "steps" */ '../views/element/steps.vue'),
      },
      {
        path: '/form',
        name: 'forms',
        meta: {
          title: '表单',
          // permiss: '21',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "form" */ '../views/element/form.vue'),
      },
      {
        path: '/upload',
        name: 'upload',
        meta: {
          title: '上传',
          // permiss: '22',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "upload" */ '../views/element/upload.vue'),
      },
      {
        path: '/statistic',
        name: 'statistic',
        meta: {
          title: '统计',
          // permiss: '28',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "statistic" */ '../views/element/statistic.vue'),
      },
      {
        path: '/echarts',
        name: 'echarts',
        meta: {
          title: 'echarts图表',
          // permiss: '42',
          noAuth: true,
        },
        component: () => import(/* webpackChunkName: "echarts" */ '../views/chart/echarts.vue'),
      }
    ]
  },
  {
    path: '/register',
    meta: {
      title: '注册',
      noAuth: true,
    },
    component: () => import('../views/register/register.vue'),
  },
  {
    path: '/forget-pwd',
    meta: {
      title: "忘记密码",
      noAuth: true,
    },
    component: () => import('../views/login/forget-pwd.vue'),
  },
  {
    path: '/403',
    meta: {
      title: '403',
      noAuth: true,
    },
    component: () => import('../views/error/403.vue')
  },
  {
    path: '/404',
    meta: {
      title: "404",
      noAuth: true,
    },
    component: () => import(/* webpackChunkName: '404' */ '../views/error/404.vue'),
  },
  {
    path: '/:path(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  const role = localStorage.getItem('vuems_name');
  const permiss = usePermissStore();

  console.log(role);
  console.log(to.meta);


  if (!role && to.meta.noAuth !== true) {
    next('/login');
  } else if (typeof to.meta.permiss == 'string' && !permiss.key.includes(to.meta.permiss)) {
    next('/403');
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
})

export default router;
