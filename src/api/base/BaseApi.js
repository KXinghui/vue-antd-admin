import { axiosInstance } from "../axios-config";

class BaseApi {
  // 如：/user
  namespace;
  constructor(namespace) {
    this.namespace = namespace;
  }
  buildUrl(url) {
    return `${this.namespace}${url}`;
  }
  insert(data, config) {
    return axiosInstance.post(this.buildUrl(""), data, config);
  }
}

export default BaseApi;
