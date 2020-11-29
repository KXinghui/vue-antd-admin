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

import "normalize.css/normalize.css";
// https://animate.style/
import animated from "animate.css";
import "ant-design-vue/dist/antd.less";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";
import "viewerjs/dist/viewer.css";
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
import Html2Canvas from "./directives/Html2Canvas";
Vue.directive("html2canvas", Html2Canvas);
// Vue.directive("hasPermi", hasPermi);

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
