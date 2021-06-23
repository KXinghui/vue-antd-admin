class ResponseResult {
  static ING = "0-1";
  static SUCC = "1";
  static FAIL = "0";
  static ERROR = "-1";
  static REPEAT = "2";
  static FREQUENT = "3";

  isIng() {
    return ResponseResult.ING == this.code || 202 == this.httpStatusCode;
  }
  isSucc() {
    return ResponseResult.SUCC == this.code;
  }
  isFail() {
    return ResponseResult.FAIL == this.code;
  }
  isError() {
    return ResponseResult.ERROR == this.code;
  }
  isRepeat() {
    return ResponseResult.REPEAT == this.code;
  }
  isFrequent() {
    return ResponseResult.FREQUENT == this.code;
  }

  httpStatusCode;
  httpStatusMsg;
  code;
  msg;
  entity;
  list;
  map;
  /**
   * 加解密
   */
  edcSign;
  /**
   * 本地语言消息
   */
  localeLangMsg;

  constructor(responseResult) {
    let {
      httpStatusCode,
      httpStatusMsg,
      code,
      msg,
      entity,
      list,
      map,
      edcSign,
      localeLangMsg
    } = responseResult;
    this.httpStatusCode = httpStatusCode;
    this.httpStatusMsg = httpStatusMsg;
    this.code = code;
    this.msg = msg;
    this.entity = entity;
    this.list = list;
    this.map = map;
    this.edcSign = edcSign;
    this.localeLangMsg = localeLangMsg;
  }
  unSign() {
    return Object.assign({}, this, { edcSign: "" });
  }
  getInMap(key) {
    return this.map[key];
  }
}

export default ResponseResult;
