import BaseApi from "./BaseApi";
import { axiosInstance } from "../axios-config";

class ThirdPartyOAuth2Api extends BaseApi {
  bindThirdParty(data, config) {
    let url = "/login/localaccount";
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
}

export default ThirdPartyOAuth2Api;
