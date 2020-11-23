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
}

export default BaseIdentityApi;
