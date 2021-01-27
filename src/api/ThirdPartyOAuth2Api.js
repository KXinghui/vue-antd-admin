import BaseApi from "./base/BaseApi";
import { axiosInstance } from "./axios-config";
import store from "../store";

class ThirdPartyOAuth2Api extends BaseApi {
  authorizeUrl(thirdParty, data, config) {
    let url = `/${thirdParty}/authorizeurl`;
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  authorize(thirdParty, data, config) {
    let url = `/${thirdParty}/authorize`;
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  bind(thirdParty, data, config) {
    let url = `/${thirdParty}/bind`;
    let accessTokenName = `${thirdParty}_access_token`;
    config.header = {
      [accessTokenName]: store.getters.oauth2[thirdParty],
      ...config.header
    };
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  unBind(thirdParty, data, config) {
    let url = `/${thirdParty}/unBind`;
    let accessTokenName = `${thirdParty}_access_token`;
    config.header = {
      [accessTokenName]: store.getters.oauth2[thirdParty],
      ...config.header
    };
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  loginIsRegister(thirdParty, data, config) {
    let url = `/${thirdParty}/loginIsRegister`;
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
}

const thirdPartyOAuth2Api = new ThirdPartyOAuth2Api("/thirdparty/oauth2");
export default thirdPartyOAuth2Api;
