import Vue from "vue";
import Icon from "@/components/Icon";
import IconSvg from "@/components/Icon/IconSvg";

// register globally
Vue.component("icon-svg", IconSvg);
Vue.component("Icon", Icon);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context("./svg", false, /\.svg$/);
requireAll(req);

// let eles = document.getElementsByClassName("anticons-list");
// for (let index = 0; index < 6; index++) {
//   let tags = eles[index].getElementsByTagName("i");
//   let icons = [];
//   for (let index = 99, len = tags.length; index < len; index++) {
//     let attr = tags[index].getAttribute("aria-label");
//     let icon = attr.split(": ")[1];
//     icons.push(icon);
//   }
//   console.log(icons);
// }
