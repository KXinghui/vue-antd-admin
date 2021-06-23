import ResponseResult from "./ResponseResult";
import store from "../../store";
// import { AES, RSA } from "../../utils/endecrypt";
import { EnDeCryptModeEnum } from "../../consts/base-enum";

class BaseNameSpaceApi {
  namespace;
  constructor(namespace) {
    this.namespace = namespace;
  }
  buildUrl(url) {
    return `${this.namespace}${url}`;
  }
  respResult(res) {
    let responseResult = new ResponseResult(res.data);
    let { pmsnEnDeCryptMode } = store.getters.identity.tokenMap;
    if (EnDeCryptModeEnum.NON.equals(pmsnEnDeCryptMode)) {
      return responseResult;
    }
    // let unSignReponseResult = responseResult.unSign();
    // if (RSA.verifySign(unSignReponseResult)) {
    //   return;
    // }
    switch (pmsnEnDeCryptMode) {
      case EnDeCryptModeEnum.SYMMETRIC.name:
        // edcSign = EnDeCryptUtils.encrypt(responseResultStr, pmsnSecretKey);
        break;
      case EnDeCryptModeEnum.ASYMMETRIC.name:
        // edcSign = EnDeCryptUtils.sign(
        //   responseResultStr,
        //   pmsnPrivateKey,
        //   EnDeCryptUtils.RSA
        // );
        break;
      case EnDeCryptModeEnum.MIX.name:
        // edcSign = EnDeCryptUtils.sign(
        //   EnDeCryptUtils.encrypt(responseResultStr, pmsnSecretKey),
        //   pmsnPrivateKey,
        //   EnDeCryptUtils.RSA
        // );
        break;
      default:
        break;
    }
    return responseResult;
  }
}

export default BaseNameSpaceApi;
