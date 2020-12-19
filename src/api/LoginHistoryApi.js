import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class LoginHistoryApi extends BaseApi {
  
}
const loginHistoryApi = new LoginHistoryApi("/loginHistory");
export default loginHistoryApi;