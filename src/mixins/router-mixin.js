/**
 * 组件守卫 在刷新/离开页面统一弹框
 */
import { confirm } from "../utils/antd-utils";

export const ROUTER_MIXIN = {
  methods: {
    updateRouteOk() {},
    updateRouteCancle() {},
    leaveRouteOk() {},
    leaveRouteCancle() {}
  },
  mounted() {
    // window.addEventListener("beforeunload", function(e) {
    //   e = e || window.event;
    //   // 兼容IE8和Firefox 4之前的版本
    //   if (e) {
    //     e.returnValue = false;
    //   }
    //   // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
    //   return true;
    // });
  },
  destroyed() {
    // window.removeEventListener("beforeunload", function(e) {
    //   e = e || window.event;
    //   // 兼容IE8和Firefox 4之前的版本
    //   if (e) {
    //     e.returnValue = false;
    //   }
    //   // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
    //   return true;
    // });
  },
  //   props: {
  //     updateRouteOk: {
  //       type: [Function],
  //       require: false
  //     },
  //     updateRouteCancle: {
  //       type: [Function],
  //       require: false
  //     },
  //     leaveRouteOk: {
  //       type: [Function],
  //       require: false
  //     },
  //     leaveRouteCancle: {
  //       type: [Function],
  //       require: false
  //     }
  //   },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    let vm = this;
    confirm({
      title: "刷新页面",
      // content: () => (
      //   <div>
      //     <span style="color:red;">确定要离开吗？</span>
      //   </div>
      // ),
      cancelText: "取消",
      okText: "刷新",
      okType: "danger",
      onOk() {
        vm.updateRouteOk();
        next();
      },
      onCancel() {
        vm.updateRouteCancle();
        next(false);
      }
    });
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    let vm = this;
    confirm({
      title: "离开页面",
      // content: () => (
      //   <div>
      //     <span style="color:red;">确定要离开吗？</span>
      //   </div>
      // ),
      cancelText: "取消",
      okText: "离开",
      okType: "danger",
      onOk() {
        vm.leaveRouteOk();
        next();
      },
      onCancel() {
        vm.leaveRouteCancle();
        next(false);
      }
    });
  }
};
