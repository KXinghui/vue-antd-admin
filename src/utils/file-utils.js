import { axiosInstance } from "../api/axios-config";
// http://html2canvas.hertzen.com/configuration/
// https://juejin.cn/post/6844904034701180942
// https://blog.csdn.net/luviawu/article/details/96995058
import html2canvas from "html2canvas";
/**
 * TODO FileDownLoader downloadByUrl downloadByBase64
 */

/**
 * 下载(请求文件 下载文件)
 * @param {*} config【url method params data responseType默认为 blob】
 * @param {*} fileName
 */
export async function download(config, fileName) {
  let isDownload = false;
  await requestFile(config).then(resp => {
    let { data } = resp;
    if (!data) {
      return false;
    }
    // const blob = new Blob([data], { type: contentType });
    const contentDisposition = resp.headers["content-disposition"];
    if (contentDisposition) {
      fileName = window.decodeURI(
        resp.headers["content-disposition"].split("=")[1]
      );
    }
    isDownload = downloadFile(data, fileName);
  });
  return isDownload;
}

/**
 * 下载(BASE64转文件 下载文件)
 * @param {*} base64
 * @param {*} fileName
 */
export function downloadByBase64(base64, fileName) {
  let blob = base64ToBlob(base64);
  return downloadFile(blob, fileName);
}

export async function htmlToCanvas(ele, options) {
  let canvasData = null;
  let element = ele || document.body;
  await html2canvas(
    element,
    Object.assign(
      {
        logging: true, // 启用日志记录以进行调试 (发现加上对去白边有帮助)
        backgroundColor: null, // 解决生成的图片有白边
        width: element.clientWidth, // DOM 原始宽度
        height: element.clientHeight, // DOM 原始高度
        scrollY: 0,
        scrollX: 0,
        useCORS: true, // 跨域
        allowTaint: true, // 允许跨源图像污染画布
        // scale: 2, //图片清晰度的保证
        // taintTest: false
        ignoreElements: ele => {
          ele.id === "root" ||
            ["IFRAME", "SCRIPT", "LINK"].includes(ele.targetName.toUpperCase());
        }
      },
      options
    )
  ).then(canvas => {
    canvasData = canvas;
  });
  return canvasData;
}

/**
 * 截图
 * @param {*} ele
 * @param {*} options
 * @param {*} fileName
 */
export async function screenshot(ele, options, fileName) {
  let isDownload = false;
  let element = ele || document.body;
  await html2canvas(
    element,
    Object.assign(
      {
        logging: true, // 启用日志记录以进行调试 (发现加上对去白边有帮助)
        backgroundColor: null, // 解决生成的图片有白边
        width: element.clientWidth, //dom 原始宽度
        height: element.clientHeight,
        scrollY: 0,
        scrollX: 0,
        useCORS: true, // 跨域
        allowTaint: true // 允许跨源图像污染画布
        // scale: 2, //图片清晰度的保证
        // taintTest: false
      },
      options
    )
  ).then(canvas => {
    isDownload = downloadByBase64(
      canvas.toDataURL("image/jpeg"),
      fileName || ""
    );
  });
  return isDownload;
}

/**
 * 下载文件
 * @param {*} blob
 * @param {*} fileName
 */
export function downloadFile(blob, fileName) {
  let isDownload = false;
  try {
    // 非IE下载
    if ("download" in document.createElement("a")) {
      let link = document.createElement("a");
      let URL = window.URL || window.webkitURL;
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      // 下载完成 移除元素 释放blob对象
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } else {
      // IE10+下载
      window.navigator.msSaveBlob(blob, fileName);
    }
    isDownload = true;
    // eslint-disable-next-line no-empty
  } catch (error) {}
  return isDownload;
}

/**
 * 请求文件
 * @param {*} config
 */
export function requestFile(config) {
  let axiosConfig = Object.assign(
    {
      responseType: config.responseType || "blob",
      headers: config.headers /* || { "Access-Control-Allow-Origin": "*" } */
    },
    config
  );
  return axiosInstance.request(axiosConfig);
}

/**
 * Blob
 */

export function blobToDataURL(blob) {
  return new Promise(function(resolve, reject) {
    let fileReader = new FileReader();
    fileReader.onload = e => resolve(e.target.result);
    fileReader.onerror = () => reject(new Error());
    fileReader.readAsDataURL(blob);
  });
}

export function base64ToBlob(base64) {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
