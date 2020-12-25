import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class SysMsgLogApi extends BaseApi {
  
}
const sysMsgLogApi = new SysMsgLogApi("/sysMsgLog");
export default sysMsgLogApi;