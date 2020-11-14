import BaseLayout from "@layouts/BaseLayout.vue";
import { PARENT_ID_VALUES, list2Tree } from "@utils/tree-utils";

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
        name: "Input",
        component: () =>
          import(/* webpackChunkName: "input" */ "@views/Admin/FormModel/Input")
      },
      {
        path: "test",
        name: "Test",
        component: () =>
          import(/* webpackChunkName: "input" */ "@views/Admin/Test")
      },
      {
        path: "test2",
        name: "Test2",
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
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "@views/Login.vue")
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
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "error-page" */ "@views/Admin/ErrorPage/NotFound.vue"
      )
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "error-page" */ "@views/Admin/ErrorPage/NotFound.vue"
      )
  },
  {
    path: "/chatUserRecord/:chatUserId",
    name: "FrontChatUserRecord",
    component: () =>
      import(
        /* webpackChunkName: "im" */ "../views/IM/Front/ChatUserRecord.vue"
      ),
    props: true
  },
  {
    path: "/chat",
    name: "FrontChat",
    component: () =>
      import(/* webpackChunkName: "im" */ "../views/IM/Front/Chat.vue")
  },
  {
    path: "/addressbook",
    name: "FrontAddressBook",
    component: () =>
      import(/* webpackChunkName: "im" */ "../views/IM/Front/AddressBook.vue")
  },
  {
    path: "/my",
    name: "FrontMy",
    component: () =>
      import(/* webpackChunkName: "im" */ "../views/IM/Front/My.vue")
  },
  {
    path: "/chatUserFriend/:chatUserId",
    name: "FrontChatUserFriend",
    component: () =>
      import(
        /* webpackChunkName: "im" */ "../views/IM/Front/ChatUserFriend.vue"
      ),
    props: true
  }
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
