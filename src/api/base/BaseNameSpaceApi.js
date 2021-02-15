class BaseNameSpaceApi {
  namespace;
  constructor(namespace) {
    this.namespace = namespace;
  }
  buildUrl(url) {
    return `${this.namespace}${url}`;
  }
}

export default BaseNameSpaceApi;
