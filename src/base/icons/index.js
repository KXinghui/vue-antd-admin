import Vue from "vue";
import Icon from "@/components/Icon";
import IconSvg from "@/components/Icon/IconSvg";

// register globally
Vue.component("icon-svg", IconSvg);
Vue.component("Icon", Icon);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context("./svg", false, /\.svg$/);
requireAll(req);
