import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class SysDBBackupHistoryApi extends BaseApi {
  
}
const sysDBBackupHistoryApi = new SysDBBackupHistoryApi("/sysDBBackupHistory");
export default sysDBBackupHistoryApi;