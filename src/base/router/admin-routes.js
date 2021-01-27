import BaseLayout from "@layouts/BaseLayout.vue";

export const ADMIN_ROUTES = [];

/**
 * 编辑器富文本路由
 */
export const EDITOR_RICHTEXTS_ROUTES = [
  {
    path: "/editor/richText",
    name: "RichText",
    component: () =>
      import(/* webpackChunkName: "richtext" */ "@views/Admin/Editor/RichText")
  }
  // {
  //   path: "/editor/richText/wangEditor",
  //   name: "WangEditor",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "wangeditor" */ "@views/Admin/Editor/RichText/WangEditorView"
  //     )
  // }
];

/**
 * 编辑器Markdown路由
 */
export const EDITOR_MARKDOWN_ROUTES = [
  {
    path: "/editor/markdown",
    name: "Markdown",
    component: () =>
      import(/* webpackChunkName: "markdown" */ "@views/Admin/Editor/RichText")
  }
];
/**
 * 编辑器路由
 */
export const EDITOR_ROUTES = [
  {
    path: "/editor",
    name: "Editor",
    component: BaseLayout,
    children: [...EDITOR_RICHTEXTS_ROUTES, ...EDITOR_MARKDOWN_ROUTES]
  }
];

export const FORM_ELE_ROUTES = [
  {
    path: "/form/test",
    name: "FormTest",
    component: () =>
      import(/* webpackChunkName: "formtest" */ "@views/Admin/FormModel/Test")
  }
];

/**
 * 表单
 */
export const FORM_ROUTES = [
  {
    path: "/form",
    name: "Form",
    component: BaseLayout,
    children: [...FORM_ELE_ROUTES]
  }
];

/**
 * BaseLayout
 */
export const BASE_LAYOUT_ROUTES = [...EDITOR_ROUTES, ...FORM_ROUTES];
