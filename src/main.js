import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import * as filters from "./filters";
// import VueI18n from "vue-i18n";
import Viewer from "v-viewer";
import Viser from "viser-vue";
import VueLazyload from "vue-lazyload";
import VueDraggableResizable from "vue-draggable-resizable";

import "normalize.css/normalize.css";
// https://animate.style/
import animated from "animate.css";
import "ant-design-vue/dist/antd.less";
import "viewerjs/dist/viewer.css";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";
import "./styles/global.less";

import "./icons";

Vue.config.productionTip = false;

// optionally import default styles

Vue.use(Antd);
// Vue.use(VueI18n);
// 过滤器统一处理加载
Object.keys(filters).forEach(moduleKey => {
  let module = filters[moduleKey];
  Object.keys(module).forEach(key => {
    Vue.filter(key, module[key]);
  });
});

/* 指令 */
import hasPmsn from "./directives/hasPmsn";
Vue.directive("has-pmsn", hasPmsn);
import hasRole from "./directives/hasRole";
Vue.directive("has-role", hasRole);

Vue.use(animated);

Vue.use(Viewer);

Vue.use(Viser);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: "./assets/lazy/error2.jfif", 不能访问
  error: "/lazy/error.jfif",
  loading: "/lazy/load.gif",
  attempt: 1
});

Vue.component("vue-draggable-resizable", VueDraggableResizable);
// Vue.component("vue-draggable-resizable", () =>
//   import("vue-draggable-resizable")
// );

Vue.component("form-item", {
  mixins: [],
  render(h) {
    let formItem = this.formItem;
    return h(formItem.cmptName, formItem.dataObj);
  },
  props: {
    formItem: {
      type: [Object],
      default: function() {
        return { cmptName: "", dataObj: {} };
      },
      required: false
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import { gzipStr, ungzipStr } from "./utils/pako-utils";
let str =
  "kxhwl520邝星辉阿斯蒂芬撒旦发射点 阿斯蒂芬撒旦发射点发 阿斯蒂芬撒旦发射点发撒打发士大夫撒地方";
// let str2 = "kxhwl520aasdf邝星辉";
// for (let index = 0; index < 1000; index++) {
//   str = str + str2;
// }

let compress = gzipStr(str);
console.log(`H4sIAAAAAAAAAMuuyCjPMTUyeNk099mM+S/2dQIAt6LZJREAAAA=` == compress);
console.log(compress);
console.log(
  ungzipStr(
    "H4sIAAAAAAAAAMuuyCjPMTUyeNk099mM+S/2db6csf/ZtPUvJjW96FrzbNKkZ9OXPe2f+HRDy/OmnQp45IAMAtIgkc7JIJHFq58uWf50yWqgyNM5G55N2wkAX+tKvoUAAAA="
  )
);
console.log(ungzipStr(compress));
