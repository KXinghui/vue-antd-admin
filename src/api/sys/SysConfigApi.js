import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class SysConfigApi extends BaseApi {
  
}
const sysConfigApi = new SysConfigApi("/sysConfig");
export default sysConfigApi;