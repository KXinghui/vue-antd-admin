import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class NoteCommentApi extends BaseApi {
  
}
const noteCommentApi = new NoteCommentApi("/noteComment");
export default noteCommentApi;