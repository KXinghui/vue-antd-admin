/* eslint-disable no-unused-vars */
/**
 * html2canvas
 * Copyright (c) 2020 vue-antd-admin
 */
import html2canvas from "html2canvas";
import { isString } from "../../utils/utils";
import { downloadByBase64 } from "../../utils/file-utils";

function html2Image(htmlELe, filename) {
  html2canvas(htmlELe).then(canvas => {
    downloadByBase64(canvas.toDataURL(), filename || "");
  });
}

export default {
  inserted(el, binding, vnode) {
    const { value } = binding;
    if (!value) {
      // {htmlElement, filename}
      throw new Error(`Please Set Options For html2canvas`);
    }
    el.addEventListener("click", function() {
      debugger;
      let htmlELe = value.htmlElement;
      if (isString(htmlELe)) {
        htmlELe = document.querySelector(htmlELe);
      }
      /* debugger;
      let htmlELe = value.htmlElement;
      let htmlElement = htmlELe;
      if (isString(htmlElement)) {
        htmlELe = document.querySelector(htmlElement);
      } */
      html2Image(htmlELe, value.filename || "");
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
