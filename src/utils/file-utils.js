import { axiosInstance } from "../api/axios-config";
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
