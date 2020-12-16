import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class NoteSettingApi extends BaseApi {
  
}
const noteSettingApi = new NoteSettingApi("/noteSetting");
export default noteSettingApi;