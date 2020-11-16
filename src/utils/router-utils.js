import router from "../router";

export function pushRoute(route) {
  // Vue刷新页面的三种方式
  // https://blog.csdn.net/weixin_43885417/article/details/91310674
  if (route && router.currentRoute && router.currentRoute.path == route.path) {
    "reload" in this && this.reload();
    return;
  }
  router.push(route);
}
