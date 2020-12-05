import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class NoteApi extends BaseApi {
  listAll() {
    let url = `/notes`;
    return axiosInstance.post(url);
  }
  listByNoteGroup(noteGroupId) {
    let url = `/noteGroup/${noteGroupId}/note`;
    return axiosInstance.post(url);
  }
  topNotes(noteIds, isTop) {
    let url = `/top`;
    return axiosInstance.post(url, { noteIds, isTop: isTop ? 1 : 0 });
  }
}
const noteApi = new NoteApi("/note");
export default noteApi;
