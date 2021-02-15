import BaseLayout from "@layouts/BaseLayout.vue";
import { PARENT_ID_VALUES, list2Tree } from "@utils/tree-utils";
import im from "./module/im";
import pvtnote from "./module/pvtnote";

export const routes = [
  // ...EDITOR_ROUTES,
  // ...FORM_ROUTES,
  {
    path: "/websocket",
    name: "WebSocket",
    component: () =>
      import(/* webpackChunkName: "websocket" */ "@views/Admin/WebSocket")
  },
  {
    path: "/formModel",
    name: "FormModel",
    component: BaseLayout,
    children: [
      {
        path: "input",
        name: "FormModelInput",
        component: () =>
          import(/* webpackChunkName: "input" */ "@views/Admin/FormModel/Input")
      },
      {
        path: "test",
        name: "FormModelTest",
        component: () =>
          import(/* webpackChunkName: "input" */ "@views/Admin/Test")
      },
      {
        path: "test2",
        name: "FormModelTest2",
        component: () =>
          import(/* webpackChunkName: "input" */ "@views/Admin/Test/index2")
      }
    ]
  },
  /* 编辑器 */
  {
    path: "/editor",
    name: "Editor",
    component: BaseLayout,
    children: [
      {
        path: "richText",
        name: "RichText",
        component: () =>
          import(
            /* webpackChunkName: "richtext" */ "@views/Admin/Editor/RichText"
          )
      },
      {
        path: "richText/quillEditor",
        name: "QuillEditor",
        component: () =>
          import(
            /* webpackChunkName: "quilleditor" */ "@views/Admin/Editor/RichText/QuillEditorView"
          )
      },
      {
        path: "richText/wangEditor",
        name: "WangEditor",
        component: () =>
          import(
            /* webpackChunkName: "wangeditor" */ "@views/Admin/Editor/RichText/WangEditorView"
          )
      },
      {
        path: "markdown",
        name: "Markdown",
        component: () =>
          import(
            /* webpackChunkName: "markdown" */ "@views/Admin/Editor/Markdown"
          )
      },
      {
        path: "markdown/tuiEditor",
        name: "TuiEditor",
        component: () =>
          import(
            /* webpackChunkName: "tuieditor" */ "@views/Admin/Editor/Markdown/TuiEditorView"
          )
      },
      {
        path: "code",
        name: "Code",
        component: () =>
          import(/* webpackChunkName: "code" */ "@views/Admin/Editor/Code")
      },
      {
        path: "code/monacoEditor",
        name: "MonacoEditor",
        component: () =>
          import(
            /* webpackChunkName: "monacoeditor" */ "@views/Admin/Editor/Code/MonacoEditorView"
          )
      },
      {
        path: "image",
        name: "ImageEditor",
        component: () =>
          import(
            /* webpackChunkName: "imageeditor" */ "@views/Admin/Editor/Image"
          )
      }
    ]
  },
  /* 图表 */
  {
    path: "/chart",
    name: "Chart",
    component: BaseLayout,
    children: [
      {
        path: "viser",
        name: "Viser",
        component: () =>
          import(/* webpackChunkName: "viser" */ "@components/Charts/Viser")
      }
    ]
  },
  {
    path: "/",
    name: "BaseLayout",
    component: BaseLayout,
    children: [
      {
        path: "/test",
        name: "Test",
        component: () =>
          import(/* webpackChunkName: "test" */ "@views/Admin/Test")
      },
      {
        path: "/layout/test",
        name: "LayoutTest",
        component: () =>
          import(/* webpackChunkName: "layout" */ "@layouts/LayoutTest.vue")
      },
      {
        path: "/model",
        name: "Model",
        component: () =>
          import(/* webpackChunkName: "about" */ "@views/Admin/Model")
      },
      {
        path: "/tableTest",
        name: "TableTest",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "table" */ "../views/Admin/Test/table.vue"
          )
      }
    ]
  },
  {
    path: "/tree",
    name: "Tree",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "test" */ "@views/Admin/Test/Tree.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@views/About.vue")
  },
  {
    path: "/table",
    name: "Table",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "table" */ "@components/Table/BaseTable.vue")
  },
  {
    path: "/resizeTable",
    name: "ResizeTable",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "table" */ "@components/Table/ResizeTable.vue"
      )
  },
  /* 视频 */
  {
    path: "/video",
    name: "Video",
    component: BaseLayout,
    children: [
      {
        path: "/video",
        name: "Video",
        component: () =>
          import(/* webpackChunkName: "video" */ "@views/Admin/Video/VideoView")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "@views/Login.vue")
  },
  {
    path: "/thirdparty/oauth2/:thirdParty/login",
    name: "ThirdPartyLogin",
    component: () =>
      import(/* webpackChunkName: "login" */ "@views/ThirdPartyLogin.vue"),
    props: true
  },
  {
    path: "/:identityRole/confirm/login",
    name: "IdentityRoleConfirmLogin",
    component: () =>
      import(
        /* webpackChunkName: "login" */ "../views/Base/Front/IdentityConfirmLoginView.vue"
      ),
    props: true
  },
  {
    path: "/confirm/login",
    name: "ConfirmLogin",
    component: () =>
      import(/* webpackChunkName: "login" */ "@views/ConfirmLogin.vue")
  },

  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "@views/Register.vue")
  },
  // {
  //   path: "/account",
  //   name: "Account",
  //   component: () =>
  //     import(/* webpackChunkName: "account" */ "@views/Account.vue")
  // },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "error-page" */ "@views/Admin/ErrorPage/NotFound.vue"
      )
  },
  ...im,
  ...pvtnote
  // {
  //   path: "*",
  //   name: "NotFound",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "error-page" */ "@views/Admin/ErrorPage/NotFound.vue"
  //     )
  // },
];

export const route = {
  path: "",
  name: "",
  alias: "",
  /**
   * 命名视图
   */
  components: { default: BaseLayout, sidebar: BaseLayout },
  props: /* true || {} || */ route => ({ query: route.query.q })
};

export function getPermissionParents(permission, permissions, isIncludeOwn) {
  let permissionParents = [];
  let permissionParent = {};
  if (isIncludeOwn) {
    permissionParents.push(permission);
  }
  while (permissionParent) {
    permissionParent = getPermissionParent(permission, permissions);
    permissionParents.push(permissionParent);
  }
  return permissionParents;
}

export function getPermissionParent(permission, permissions) {
  let parentId = permission.parentId;
  if (!PARENT_ID_VALUES.includes(parentId) && permissions) {
    return permissions.find(pmsn => {
      return parentId === pmsn.id;
    })[0];
  }
}

export function genRouters(permissions) {
  const routers = [];
  permissions.forEach(permission => {
    const router = {
      path: permission.url,
      name: permission.enCode,
      // Critical dependency: the request of a dependency is an expression
      component: () => import(permission.viewPath),
      children: []
    };
    routers.push(router);
  });
  return list2Tree(routers);
}
