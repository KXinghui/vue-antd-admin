import BaseApi from "../base/BaseApi";
// import { axiosInstance } from "../axios-config";

class SysUserApi extends BaseApi {}
const sysUserApi = new SysUserApi("/sysUser");
export default sysUserApi;
