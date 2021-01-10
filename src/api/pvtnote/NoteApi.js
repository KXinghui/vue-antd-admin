import BaseApi from "../base/BaseApi";
import { axiosInstance } from "../axios-config";

class NoteApi extends BaseApi {
  create(noteDTO) {
    let url = `/create`;
    return axiosInstance.post(url, noteDTO);
  }
  edit(noteDTO) {
    let url = `/edit`;
    return axiosInstance.post(url, noteDTO);
  }
  top(noteIds) {
    let url = `/top`;
    return axiosInstance.post(url, { noteIds });
  }
  read(noteDTO) {
    let url = `/read`;
    return axiosInstance.post(url, noteDTO);
  }
  listItems(noteGroupId, groupStationEnum) {
    let url = `/items`;
    return axiosInstance.post(url, { noteGroupId, groupStationEnum });
  }
}
const noteApi = new NoteApi("/note");
export default noteApi;
