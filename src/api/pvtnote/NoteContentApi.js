import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class NoteContentApi extends BaseApi {
  
}
const noteContentApi = new NoteContentApi("/noteContent");
export default noteContentApi;