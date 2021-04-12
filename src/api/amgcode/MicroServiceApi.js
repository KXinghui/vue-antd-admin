import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class MicroServiceApi extends BaseApi {
  
}
const microServiceApi = new MicroServiceApi("/microService");
export default microServiceApi;