import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class SysNoticeApi extends BaseApi {
  
}
const sysNoticeApi = new SysNoticeApi("/sysNotice");
export default sysNoticeApi;