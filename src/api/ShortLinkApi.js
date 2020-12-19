import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class ShortLinkApi extends BaseApi {
  
}
const shortLinkApi = new ShortLinkApi("/shortLink");
export default shortLinkApi;