class ResponseResult {
  static ING = "0-1";
  static SUCC = "1";
  static FAIL = "0";
  static ERROR = "-1";
  static REPEAT = "2";
  static FREQUENT = "3";

  static isIng() {
    return ResponseResult.ING == this.code || 202 == this.httpStatusCode;
  }
  static isSucc() {
    return ResponseResult.SUCC == this.code;
  }
  static isFail() {
    return ResponseResult.FAIL == this.code;
  }
  static isError() {
    return ResponseResult.ERROR == this.code;
  }
  static isRepeat() {
    return ResponseResult.REPEAT == this.code;
  }
  static isFrequent() {
    return ResponseResult.FREQUENT == this.code;
  }

  httpStatusCode;
  httpStatusMsg;
  code;
  msg;
  entity;
  list;
  map;

  constructor(responseResult) {
    let {
      httpStatusCode,
      httpStatusMsg,
      code,
      msg,
      entity,
      list,
      map
    } = responseResult;
    this.httpStatusCode = httpStatusCode;
    this.httpStatusMsg = httpStatusMsg;
    this.code = code;
    this.msg = msg;
    this.entity = entity;
    this.list = list;
    this.map = map;
  }
  getInMap(key) {
    return this.map[key];
  }
}

export default ResponseResult;
