class BaseApi {
  // 如：/user
  namespace;
  constructor(namespace) {
    this.namespace = namespace;
  }
  buildUrl(url) {
    return `${this.namespace}${url}`;
  }
}

export default BaseApi;
