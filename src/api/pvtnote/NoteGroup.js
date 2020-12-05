import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class NoteGroupApi extends BaseApi {
  listAll() {
    let url = `/noteGroups`;
    return axiosInstance.post(url);
  }
}
const noteGroupApi = new NoteGroupApi("/noteGroup");
export default noteGroupApi;
