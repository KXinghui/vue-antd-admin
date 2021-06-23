import router from "../router";
import { msg } from "./antd-utils";
import { isString } from "./utils";

export function transferRoute(route) {
  return {
    name: route.name,
    path: "fullPath" in route ? route.fullPath : route.path,
    params: route.params || {},
    query: route.query || {},
    meta: route.meta || {}
  };
}
/**
 * route meta 属性
 *
 * isActiveWhenNonTag 没有标签时是否激活
 * isClosable 是否可关闭
 * isIncludeParamsWhenMatch 匹配时是否包含参数
 * isPushToTagBarWhenClickMenu 点击菜单时是否推到标签栏
 */

/**
 * 匹配 返回索引 -1 则没有
 * @param {*} routes
 * @param {*} route
 */
export function matchRoute(routes, route) {
  let routeIndex = -1;
  if (!routes || !route) {
    return routeIndex;
  }
  let realRoute = transferRoute(route);
  /**
   * Cannot use 'in' operator to search for 'isIncludeParamsWhenMatch' in undefined
   *
   */
  // let isIncludeParamsWhenMatch =
  //   realRoute.meta && "isIncludeParamsWhenMatch" in realRoute.meta
  //     ? realRoute.meta.isIncludeParamsWhenMatch
  //     : false;
  routes.forEach((r, index) => {
    // let routesRouteStr = isIncludeParamsWhenMatch
    //   ? `${r.path}-${JSON.stringify(r.params)}-${JSON.stringify(r.query)}`
    //   : `${r.path}`;
    // routesRouteStr = `${r.name}-${routesRouteStr}`;
    // let routeStr = isIncludeParamsWhenMatch
    //   ? `${realRoute.path}-${JSON.stringify(realRoute.params)}-${JSON.stringify(
    //       realRoute.query
    //     )}`
    //   : `${realRoute.path}`;
    // routeStr = `${realRoute.name}-${routeStr}`;
    if (getRouteStr(r) == getRouteStr(realRoute)) {
      routeIndex = index;
      return true;
    }
  });
  return routeIndex;
}

export function getRouteStr(route) {
  let isIncludeParamsWhenMatch =
    route.meta && "isIncludeParamsWhenMatch" in route.meta
      ? route.meta.isIncludeParamsWhenMatch
      : false;
  let routeStr = isIncludeParamsWhenMatch
    ? `${route.path}-${JSON.stringify(route.params)}-${JSON.stringify(
        route.query
      )}`
    : `${route.path}`;
  routeStr = `${route.name}-${routeStr}`;
  return routeStr;
}

/**
 * Navigation cancelled from with a new navigation
 *
 */
export function pushRoute(route) {
  // Vue刷新页面的三种方式
  // https://blog.csdn.net/weixin_43885417/article/details/91310674
  if (!route) {
    return;
  }
  let currentRoutePath = router.currentRoute.path;
  if (
    route && router.currentRoute && isString(route)
      ? currentRoutePath == route
      : currentRoutePath == route.path
  ) {
    if (this && "reload" in this) {
      msg(
        this.reload()
          ? { code: "1", msg: "刷新页面" }
          : { code: "-1", msg: "刷新页面" }
      );
    }
    return;
  }
  router.push(route);
}

export function goRoute(n) {
  router.go(n);
}

export function back() {
  goRoute(-1);
}
