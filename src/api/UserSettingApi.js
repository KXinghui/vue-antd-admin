import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class UserSettingApi extends BaseApi {
  
}
const userSettingApi = new UserSettingApi("/userSetting");
export default userSettingApi;