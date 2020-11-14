// import { PSM, OEM } from "tesseract.js";
// import { msg } from "./antd-utils";

export function isProd() {
  return process.env.NODE_ENV === "production";
}

export function base64ToFile(base, fileName, fileSuffix) {
  const arr = base.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  if (window.navigator.msSaveBlob) {
    // for ie 10 and later
    try {
      const blobObject = new Blob([u8arr], { type: mime });
      window.navigator.msSaveBlob(blobObject, `${fileName}.${fileSuffix}`);
    } catch (e) {
      console.log(e);
    }
  } else {
    const url = window.URL.createObjectURL(new Blob([u8arr], { type: mime }));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${fileName}.${fileSuffix}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // 下载完成移除元素
    window.URL.revokeObjectURL(url); // 释放掉blob对象
  }
}

export function fileToBase64(file) {
  const reader = new FileReader();
  reader.onload = e => {
    console.log(e.target.result);
  };
  reader.onprogress = e => {
    console.log(e.target.result);
  };
  reader.onerror = e => {
    console.log(e.target.result);
  };
  reader.readAsDataURL(file);
}

export function fileToImage(file) {
  if (!(file instanceof Blob)) {
    return;
  }
  var reader = new FileReader();
  var img = new Image();
  reader.onload = function(event) {
    img.src = event.target.result; //base64
  };
  reader.readAsDataURL(file); //读取图像文件 result 为 DataURL, DataURL 可直接 赋值给 img.src
  return img;
}

// export async function tesseractRecognize(worker, fileList) {
//   if (!fileList || fileList.size == 0) {
//     return;
//   }
//   let startDate = new Date();
//   await worker.load();
//   await worker.loadLanguage("eng+chi_tra");
//   await worker.initialize("eng+chi_tra", OEM.LSTM_ONLY);
//   await worker.setParameters({
//     tessedit_pageseg_mode: PSM.SINGLE_BLOCK
//   });
//   let values = [];
//   for (let file of fileList) {
//     let img = fileToImage(file);
//     const {
//       data: { text }
//     } = await worker.recognize(img);
//     console.log("识别为：", text);
//     values.push(text);
//     // console.log(file + "识别为：" + text);
//   }
//   console.log(values);
//   await worker.terminate();
//   let endDate = new Date();
//   console.log("耗费了： ", endDate.getTime() - startDate.getTime());
// }

export function hexToRgba(hex, opacity) {
  return (
    "rgba(" +
    parseInt("0x" + hex.slice(1, 3)) +
    "," +
    parseInt("0x" + hex.slice(3, 5)) +
    "," +
    parseInt("0x" + hex.slice(5, 7)) +
    "," +
    opacity +
    ")"
  );
}

/* 防抖、节流 */
/**
 * https://www.freesion.com/article/5689875548/
 * 1、优化 this 和 arguments
 * 2、优化取消
 * 3、优化返回值【ES6前回调函数 ES6后Promise Async/Await】
 */
/**
 * 防抖：短时间内大量触发同一事件，只会执行一次函数
 * 非立即执行 触发后，延迟指定时间再执行
 * 立即执行 触发后立即执行,等待指定时间后再执行
 *
 */

export function debounce(func, delay, immediate) {
  let timer;
  let handler = function() {
    return new Promise((resovle, reject) => {
      try {
        // this和参数
        // 注意 this 指向
        const context = this,
          // arguments中存着事件对象e
          args = [...arguments];
        if (timer) clearTimeout(timer);
        if (immediate) {
          const callNow = !timer;
          timer = setTimeout(() => {
            timer = null;
          }, delay);
          if (callNow) resovle(func.apply(context, args));
        } else {
          timer = setTimeout(() => {
            resovle(func.apply(context, args));
          }, delay);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  // 取消
  handler.cancel = function() {
    if (timer) {
      clearTimeout(timer);
    }
  };
  return handler;
}

/**
 * 节流
 * @param {*} func
 * @param {*} delay
 */
export function throttle(func, delay) {
  let start = new Date().getTime(),
    timer = null,
    handler = function() {
      return new Promise((resovle, reject) => {
        try {
          let context = this,
            args = arguments,
            current = new Date().getTime();

          clearTimeout(timer);

          if (current - start > delay) {
            resovle(func.apply(context, args));
            start = current;
          } else {
            timer = setTimeout(() => {
              timer = null;
              resovle(func.apply(context, args));
            }, delay);
          }
        } catch (error) {
          reject(error);
        }
      });
    };

  // 取消
  handler.cancel = function() {
    if (timer) clearTimeout(timer);
  };

  return handler;
}

export function isMobile() {
  return document.body.offsetWidth < 576;
}

export function isObject(obj) {
  return typeof obj === "object";
}

export function isBoolean(boolean) {
  return typeof boolean === "boolean";
}
export function isString(string) {
  return typeof string === "string";
}

/**
 * 字符串是否JSON 是返回parse后，否返回false
 * @param {*} string
 */
export function isJson(string) {
  let isJson = false;
  try {
    let value = JSON.parse(string);
    if (value && isObject(value)) {
      return value;
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}
  return isJson;
}

export function isJSON(string) {
  let isJson = false;
  try {
    let value = JSON.parse(string);
    if (value && isObject(value)) {
      isJson = true;
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}
  return isJson;
}

/**
 * 渐变数字
 * @param {*} source
 * @param {*} target
 * @param {*} rate
 */
export function gradientNum(source, target, rate) {
  if (!source || !target) {
    return;
  }
  let sourceNum = parseFloat(source);
  let targetNum = parseFloat(target);
  let timer = setTimeout(() => {
    sourceNum++;
    source = sourceNum;
    if (sourceNum && sourceNum && sourceNum >= targetNum) {
      clearTimeout(timer);
      return;
    }
    gradientNum(source, target, rate);
  }, rate);
}

/* var compressor = require("yuicompressor");

export async function yuicompress(code, options) {
  let result = {};
  try {
    await compressor.compress(
      code,
      Object.assign(
        {
          //Compressor Options:
          charset: "utf8",
          type: "js",
          nomunge: true,
          "line-break": 80
        },
        options
      ),
      function(err, data, extra) {
        result = { err, data, extra };
        //err   If compressor encounters an error, it's stderr will be here
        //data  The compressed string, you write it out where you want it
        //extra The stderr (warnings are printed here in case you want to echo them
      }
    );
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(result);
} */

/* const msgOnlineStatus = () => {
  let onLine = navigator.onLine;
  msg({
    code: onLine ? 1 : -1,
    msg: onLine ? "ONLINE" : "OFFLINE"
  });
};
window.addEventListener("online", msgOnlineStatus);
window.addEventListener("offline", msgOnlineStatus); */
