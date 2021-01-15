import BaseIdentityApi from "./base/BaseIdentityApi";
// import { axiosInstance } from "../axios-config";

class ThirdPartyAuthApi extends BaseIdentityApi {}
const thirdPartyAuthApi = new ThirdPartyAuthApi("/thirdpartyauth");
export default thirdPartyAuthApi;
