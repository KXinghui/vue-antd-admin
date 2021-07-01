export const ADMIN_MENUS = [];

export const EDITOR_RICHTEXTS_MENUS = [
  {
    path: "/editor/richText/wangEditor",
    name: "WangEditor"
  },
  {
    path: "/editor/richText/quillEditor",
    name: "QuillEditor"
  }
];

export const EDITOR_CODES_MENUS = [
  {
    path: "/editor/code/monacoEditor",
    name: "MonacoEditor"
  }
];
/**
 * 编辑器富文本路由
 */
export const EDITOR_RICHTEXT_MENUS = [
  {
    path: "/editor/richText",
    name: "RichText",
    children: [...EDITOR_RICHTEXTS_MENUS]
  }
];

export const EDITOR_MARKDOWNS_MENUS = [
  {
    path: "/editor/markdown/tuiEditor",
    name: "TuiEditor"
  }
];

/**
 * 编辑器Markdown路由
 */
export const EDITOR_MARKDOWN_MENUS = [
  {
    path: "/editor/markdown",
    name: "Markdown",
    children: [...EDITOR_MARKDOWNS_MENUS]
  }
];
/**
 * 编辑器代码路由
 */
export const EDITOR_CODE_MENUS = [
  {
    path: "/editor/code",
    name: "Code",
    children: [...EDITOR_CODES_MENUS]
  }
];

export const EDITOR_IMAGES_MENUS = [];

/**
 * 编辑器Image路由
 */
export const EDITOR_IMAGE_MENUS = [
  {
    path: "/editor/image",
    name: "ImageEditor",
    children: [...EDITOR_IMAGES_MENUS]
  }
];

/**
 * 编辑器路由
 */
export const EDITOR_MENUS = [
  {
    path: "/editor",
    name: "Editor",
    children: [
      ...EDITOR_RICHTEXT_MENUS,
      ...EDITOR_MARKDOWN_MENUS,
      ...EDITOR_CODE_MENUS,
      ...EDITOR_IMAGE_MENUS
    ]
  }
];

export const FORM_ELE_MENUS = [
  {
    path: "/formModel/input",
    name: "FormModelInput"
  }
];

/**
 * 表单
 */
export const FORM_MODEL_MENUS = [
  {
    path: "/formModel",
    name: "FormModel",
    children: [...FORM_ELE_MENUS]
  }
];

export const CHART_VISER_MENUS = [
  {
    path: "/chart/viser",
    name: "Viser"
    // children: [...]
  }
];

/**
 * 图表
 */
export const CHART_MENUS = [
  {
    path: "/chart",
    name: "Chart",
    children: [...CHART_VISER_MENUS]
  }
];

export const MODEL_MENUS = [{ path: "/model", name: "Model" }];

/**
 * BaseLayout
 */
export const BASE_LAYOUT_MENUS = [
  ...EDITOR_MENUS,
  ...FORM_MODEL_MENUS,
  ...CHART_MENUS,
  { path: "/video", name: "Video" }
];

export const BASE_MENUS = [
  {
    path: "/",
    name: "BaseLayout",
    meta: {
      isActiveWhenNonTag: true
    }
  },
  {
    path: "/test",
    name: "Test"
  },
  {
    path: "/layout/test",
    name: "LayoutTest"
  },
  {
    path: "/about",
    name: "About",
    meta: {
      isPushToTagBarWhenClickMenu: false
    }
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      isPushToTagBarWhenClickMenu: false
    }
  },
  {
    path: "/register",
    name: "Register"
  },
  {
    path: "/404",
    name: "NotFound"
  }
];
