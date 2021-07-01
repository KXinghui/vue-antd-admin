import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { routes } from "./routes";

import { loading } from "../utils/store-utils";
// import { confirm, } from "../utils/antd-utils";

// import { mapMutations } from "vuex";

// import { msg, notify } from "@utils/antd-utils";

// import { EDITOR_ROUTES, FORM_ROUTES } from "./admin-routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // eslint-disable-next-line no-unused-vars
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ x: 0, y: 0 });
    //   }, 500);
    // });
    if (to.hash) {
      return {
        selector: to.hash,
        // 启用原生平滑滚动
        behavior: "smooth"
      };
    }
  }
});

/* 全局前置守卫 */
router.beforeEach((to, from, next) => {
  loading({ isLoad: true });
  console.log(to);
  console.log(from);
  console.log(next);
  console.log("routes    ", routes);
  // TODO 鉴权 permission responseResultType为json
  let isLogin = true;
  if (!isLogin && to.name != "Login") {
    // 当前只记录未登录时的from和请求
    next({ path: "/login" });
  }
  // TODO 获取未登录时记录的from和

  // TODO 离开页面时是否弹框提示
  // 全局对于 window默认的 样式不一致 使用组件守卫
  // if (from.matched.some(record => record.meta.confirmBeforeLeave)) {
  //   debugger;

  //   return;
  //   // confirm({
  //   //   title: "离开页面",
  //   //   // content: () => (
  //   //   //   <div>
  //   //   //     <span style="color:red;">确定要离开吗？</span>
  //   //   //   </div>
  //   //   // ),
  //   //   cancelText: "取消",
  //   //   okText: "离开",
  //   //   okType: "danger",
  //   //   onOk() {
  //   //     NProgress.start();
  //   //     next();
  //   //   },
  //   //   onCancel() {}
  //   // });
  //   // return;
  // }

  try {
    NProgress.start();
    next();
    // api 解析 to 返回的结果进行判断处理
    // let responseResult = {
    //   code: 0,
    //   httpCode: 404,
    //   msg: "asdfasdfasdf"
    // };
    // let code = responseResult.code;
    // if (1 === code) {
    //   NProgress.start();
    //   next();
    // } else if (0 === code) {
    //   NProgress.start();
    //   next();
    // next({ path: `/${responseResult.httpCode}` });
    // }
    // responseResult.code = "0-1";
    // msg(responseResult), notify(responseResult);
  } catch (error) {
    next(error);
  }
});

// 全局后置钩子
router.afterEach((to, from) => {
  loading({ isLoad: false });
  console.log(to);
  console.log(from);
  NProgress.done();
});

export default router;

// 用户退出页面时触发 unload; 即将离开页面（刷新或关闭）时触发 beforeunload
// 监听窗口事件 在用户退出、刷新页面时弹窗提示
// window.addEventListener("unload", e => this.beforeunloadHandler(e));
// window.addEventListener("beforeunload", this.beforeunloadHandler);
// 移除监听窗口事件
// window.removeEventListener("unload", e => this.beforeunloadHandler(e));
// window.removeEventListener("beforeunload", this.beforeunloadHandler);
