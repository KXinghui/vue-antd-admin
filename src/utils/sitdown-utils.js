import { Sitdown, RootNode } from "sitdown";
import { applyJuejinRule } from "@sitdown/juejin";

let juejinSitdown = null;

export function juejinTomd(html) {
  if (!juejinSitdown) {
    juejinSitdown = new Sitdown({
      keepFilter: ["style"],
      codeBlockStyle: "fenced",
      bulletListMarker: "-",
      hr: "---"
    });
    juejinSitdown.use(applyJuejinRule);
  }
  return juejinSitdown.HTMLToMD(html);
}

import { applyWechatRule, extraFootLinks } from "@sitdown/wechat";

let wechatSitdown = null;

export function wechatTomd(html) {
  debugger;
  if (!wechatSitdown) {
    wechatSitdown = new Sitdown({
      keepFilter: ["style"],
      codeBlockStyle: "fenced",
      bulletListMarker: "-",
      hr: "---"
    });
    wechatSitdown.use(applyWechatRule);
  }
  const root = new RootNode(html);
  const footLinks = extraFootLinks(root);
  return wechatSitdown.HTMLToMD(html, { footLinks });
}

import { applyZhihuRule } from "@sitdown/zhihu";

let zhihuSitdown = null;

export function zhihuTomd(html) {
  if (!zhihuSitdown) {
    zhihuSitdown = new Sitdown({
      keepFilter: ["style"],
      codeBlockStyle: "fenced",
      bulletListMarker: "-",
      hr: "---"
    });
    zhihuSitdown.use(applyZhihuRule);
  }
  return zhihuSitdown.HTMLToMD(html);
}

let csdnSitdown = null;

export function csdnTomd(html) {
  if (!csdnSitdown) {
    csdnSitdown = new Sitdown({
      keepFilter: ["style"],
      codeBlockStyle: "fenced",
      bulletListMarker: "-",
      hr: "---"
    });
  }
  return csdnSitdown.HTMLToMD(html);
}

export function htmlTomd(html, platform) {
  let md = "";
  switch (platform) {
    case "wechat":
      md = wechatTomd(html);
      break;
    case "juejin":
      md = juejinTomd(html);
      break;
    case "zhihu":
      md = zhihuTomd(html);
      break;
    case "csdn":
      md = csdnTomd(html);
      break;
    default:
      break;
  }
  return md;
}
