import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class PermissionApi extends BaseApi {
  
}
const permissionApi = new PermissionApi("/permission");
export default permissionApi;