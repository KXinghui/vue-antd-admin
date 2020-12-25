import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class SysMailApi extends BaseApi {
  
}
const sysMailApi = new SysMailApi("/sysMail");
export default sysMailApi;