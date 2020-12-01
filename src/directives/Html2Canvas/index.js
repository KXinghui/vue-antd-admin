/* eslint-disable no-unused-vars */
/**
 * html2canvas
 * Copyright (c) 2020 vue-antd-admin
 */
import html2canvas from "html2canvas";
import { isString } from "../../utils/utils";
import { downloadByBase64 } from "../../utils/file-utils";

async function html2Image(htmlELe, options, filename) {
  let isDownload = false;
  await html2canvas(htmlELe, options).then(canvas => {
    isDownload = downloadByBase64(canvas.toDataURL(), filename || "");
  });
  return isDownload;
}

export default {
  inserted(el, binding, vnode) {
    const { value } = binding;
    if (!value) {
      // {htmlElement, filename}
      throw new Error(`Please Set Options For html2canvas`);
    }
    let vm = this;
    el.addEventListener("click", function() {
      debugger;
      let htmlELe = value.htmlRef;
      if (isString(value.htmlRef)) {
        htmlELe = vm.$refs[value.htmlRef];
      }
      html2Image(
        htmlELe,
        {
          scale: 2, //图片清晰度的保证
          useCORS: true, //允许图片跨域，一定要开启
          //Whether to allow cross-origin images to taint the canvas
          allowTaint: true,
          //Whether to test each image if it taints the canvas before drawing them
          taintTest: false
        },
        value.filename || ""
      ).then(() => {});
    });
  }
  /* unbind(el, binding) {
    const { value } = binding;
    if (!value) {
      return;
    }
    el.removeEventListener("click", function() {
      let htmlELe = value.htmlElement;
      let htmlElement = htmlElement;
      if (isString(htmlElement)) {
        htmlELe = document.querySelector(htmlElement);
      }
      html2Image(htmlELe, value.filename || "");
      // html2canvas(htmlELe).then(canvas => {
      //   downloadByBase64(canvas, value.filename || "");
      // });
    });
  } */
};
