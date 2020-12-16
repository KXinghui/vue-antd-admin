import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class NoteTagApi extends BaseApi {
  
}
const noteTagApi = new NoteTagApi("/noteTag");
export default noteTagApi;