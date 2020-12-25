import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class SysLocationApi extends BaseApi {
  
}
const sysLocationApi = new SysLocationApi("/sysLocation");
export default sysLocationApi;