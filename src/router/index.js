import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { routes } from "./routes";

import { loading } from "../utils/store-utils";

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
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
