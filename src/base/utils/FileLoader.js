import SparkMD5 from "spark-md5";

/**
 * 使用 Promise 封装 FileReader
 *
 * 使用 类 封装 FileReader
 * 【https://blog.csdn.net/q1056843325/article/details/60147938】
 * 【JavaScript 类 property 封装】
 */
export class FileLoader {
  blobSlice =
    File.prototype.slice ||
    File.prototype.mozSlice ||
    File.prototype.webkitSlice;
  spark = new SparkMD5.ArrayBuffer();
  shardSize = 2097152;
  totalShard;
  currentShard = 0;
  fileReader = new FileReader();
  isRead = false;
  file;
  fileMD5;
  readResult;
  constructor(file, shardSize) {
    this.file = file;
    this.shardSize = shardSize;
  }

  init() {
    this.totalShard = Math.ceil(this.file.size / this.shardSize);
  }

  isRead() {
    return this.isRead;
  }
  loadNext() {}
  /**
   * 中止读取操作。在返回时，readyState属性为DONE
   */
  abort() {
    this.fileReader.abort();
  }
  /**
   * 开始读取指定的 Blob中的内容, 一旦完成, result 属性中保存的将是被读取文件的 ArrayBuffer 数据对象.
   */
  readAsArrayBuffer() {
    this.fileReader.readAsArrayBuffer();
  }
  /**
   * 开始读取指定的Blob中的内容。一旦完成，result属性中将包含所读取文件的原始二进制数据。
   */
  readAsBinaryString() {
    this.fileReader.readAsBinaryString();
  }
  /**
   * 开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个data: URL格式的Base64字符串以表示所读取文件的内容。
   */
  readAsDataURL() {
    this.fileReader.readAsDataURL();
  }
  /**
   * 开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个字符串以表示所读取的文件内容。
   */
  readAsText() {
    this.fileReader.readAsText();
  }
  getReadResult() {
    return this.readResult;
  }
}

FileLoader.prototype = {
  bindEvent: function() {
    var _this = this,
      reader = this.reader;
    reader.onload = function() {
      _this.onLoad();
    };
    reader.onprogress = function(e) {
      _this.onProgress(e.loaded);
    };
    // start、abort、error回调暂无
  },
  onProgress: function(loaded) {
    var percent,
      handler = this.events.progress;
    this.loaded += loaded;
    percent = (this.loaded / this.total) * 100;
    handler && handler(percent);
  },
  // 读取结束（每一次执行read结后调用）
  onLoad: function() {
    var handler = this.events.load;
    // 在此发送读取的数据
    handler && handler(this.reader.result);
    // 如果未读取完毕继续读取
    if (this.loaded < this.total) {
      this.readBlob(this.loaded);
    } else {
      // 读取完毕
      this.loaded = this.total;
      // 如果有success回调则执行
      this.events.success && this.events.success();
    }
  },
  // 读取文件内容
  readBlob: function(start) {
    var blob,
      file = this.file;
    // 若支持slice方法，则分步读取，不支持就一次性读取
    if (file.slice) {
      blob = file.slice(start, start + this.step + 1);
    } else {
      blob = file;
    }
    this.reader.readAsText(blob);
  },
  // 中止读取
  abort: function() {
    var reader = this.reader;
    if (reader) {
      reader.abort();
    }
  }
};
