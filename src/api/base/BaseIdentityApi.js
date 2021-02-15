import BaseApi from "./BaseApi";
import { axiosInstance } from "../axios-config";

class BaseIdentityApi extends BaseApi {
  loginByLocalAccount(data, config) {
    let url = "/login/localaccount";
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  loginByMail(data, config) {
    let url = "/login/mail";
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  register(data, config) {
    let url = "/register";
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  updatePassword(data, config) {
    let url = "/password/update";
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  bindMail(data, config) {
    let url = "/mail/bind";
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  bindMobile(data, config) {
    let url = "/mobile/bind";
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  upLoadAvatar(data, config) {
    let url = "/avatar/upload";
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  getIdentity(data, config) {
    let url = "/identity";
    return axiosInstance.get(this.buildUrl(url), data, config);
  }
}

export default BaseIdentityApi;
