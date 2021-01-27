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
    return axiosInstance.post(this.buildUrl(``), data, config);
  }
  update(data, config) {
    return axiosInstance.post(this.buildUrl(``), data, config);
  }
  delete(data, config) {
    return axiosInstance.delete(this.buildUrl(``), data, config);
  }
  get(data, config) {
    return axiosInstance.get(this.buildUrl(``), data, config);
  }
  list(data, config) {
    return axiosInstance.post(this.buildUrl(`/list`), data, config);
  }
  listAccurate(data, config) {
    return this.list(Object.assign(data, { listMode: "accurate" }), config);
  }
  listFuzzy(data, config) {
    return this.list(Object.assign(data, { listMode: "fuzzy" }), config);
  }
  pageList(data, config) {
    return axiosInstance.post(this.buildUrl(`/pageList`), data, config);
  }
  pageListAccurate(data, config) {
    return this.pageList(Object.assign(data, { listMode: "accurate" }), config);
  }
  pageListFuzzy(data, config) {
    return this.pageList(Object.assign(data, { listMode: "fuzzy" }), config);
  }
  tableList(data, config) {
    return axiosInstance.post(this.buildUrl(`/tableList`), data, config);
  }
  tableListAccurate(data, config) {
    return this.tableList(
      Object.assign(data, { listMode: "accurate" }),
      config
    );
  }
  tableListFuzzy(data, config) {
    return this.tableList(Object.assign(data, { listMode: "fuzzy" }), config);
  }
}

export default BaseApi;
