import router from "../router";
import { msg } from "./antd-utils";

export function pushRoute(route) {
  // Vue刷新页面的三种方式
  // https://blog.csdn.net/weixin_43885417/article/details/91310674
  if (route && router.currentRoute && router.currentRoute.path == route.path) {
    msg(
      "reload" in this || this.reload()
        ? { code: "1", msg: "刷新页面" }
        : { code: "-1", msg: "刷新页面" }
    );
    return;
  }
  router.push(route);
}
