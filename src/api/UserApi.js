import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class UserApi extends BaseApi {
  
}
const userApi = new UserApi("/user");
export default userApi;