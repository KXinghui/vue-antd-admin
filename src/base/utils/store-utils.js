import store from "../store";
import { ADMIN_MUTATION_TYPE } from "../store/mutation-type";

export function loading(payload) {
  store.commit(
    `${ADMIN_MUTATION_TYPE.NAMESPACE}${ADMIN_MUTATION_TYPE.LOADING}`,
    payload
  );
}
