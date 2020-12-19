import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class UserTagApi extends BaseApi {
  
}
const userTagApi = new UserTagApi("/userTag");
export default userTagApi;