import BaseIdentityApi from "./base/BaseIdentityApi";
// import { axiosInstance } from "../axios-config";

class UserApi extends BaseIdentityApi {}
const userApi = new UserApi("/user");
export default userApi;
