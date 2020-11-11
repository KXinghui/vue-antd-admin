import { Modal } from "ant-design-vue";

export const OK = "ok";
export const CANCEL = "cancel";

export function confirm({
  className,
  title,
  content,
  okType,
  localeText,
  centered,
  closable,
  mask
}) {
  return new Promise(function(resolve) {
    Modal.confirm({
      class: className || "modal-confirm",
      centered,
      closable,
      mask,
      okType,
      title,
      // eslint-disable-next-line no-unused-vars
      // content: h => <div style="color:red;">Some descriptions</div>,
      content,
      okText: localeText.ok || "确定",
      cancelText: localeText.cancel || "取消",
      onOk() {
        resolve(OK);
      },
      onCancel() {
        resolve(CANCEL);
      }
    });
  });
}

/* export function openModel({ vm }) {
  Modal.info
  Modal.success
  Modal.error
  Modal.warning
  Modal.confirm
} */
