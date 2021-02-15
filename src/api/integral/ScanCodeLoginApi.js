import { axiosInstance } from "../axios-config";
import BaseNameSpaceApi from "../base/BaseNameSpaceApi";

class ScanCodeLoginApi extends BaseNameSpaceApi {
  drawScanCode(identityRole, data, config) {
    let url = `/draw`;
    if (identityRole) {
      url = `/${identityRole}/draw`;
    }
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  enterView(data, config) {
    let url = `/enterview`;
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
  confirmLogin(data, config) {
    let url = `/confirm`;
    return axiosInstance.post(this.buildUrl(url), data, config);
  }
}

const scanCodeLoginApi = new ScanCodeLoginApi("/scancode/login");
export default scanCodeLoginApi;
