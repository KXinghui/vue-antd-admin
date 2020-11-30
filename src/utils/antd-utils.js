import { message, notification, Modal } from "ant-design-vue";

const MSG_DURATION = 3;

export function msg(responseResult) {
  let responseResultCode = responseResult.code;
  let msg = responseResult.localeLangMsg || responseResult.msg;
  let onClose = null;
  if (responseResultCode == "0-1") {
    message.loading(msg, MSG_DURATION, onClose);
  } else if (responseResultCode == "-1") {
    message.error(msg, MSG_DURATION, onClose);
  } else if (responseResultCode == "1") {
    message.success(msg, MSG_DURATION, onClose);
  } else if (responseResultCode == "0") {
    message.warn(msg, MSG_DURATION, onClose);
  } else if (responseResultCode == "2" || responseResultCode == "3") {
    message.info(msg, MSG_DURATION, onClose);
  }
}

export function confirm(modalOptions) {
  Modal.confirm(Object.assign({ centered: true }, modalOptions));
}

export function notify(responseResult) {
  let responseResultCode = responseResult.code;
  let msg = responseResult.localeLangMsg || responseResult.msg;
  let notificationConfig = {
    message: msg,
    description: ""
  };
  if (responseResultCode == "0-1") {
    notificationConfig = {
      ...notificationConfig,
      icon: function(h) {
        // h == createElement
        return h("a-icon", {
          style: { color: "#108ee9" },
          props: { type: "loading" }
        });
      }
    };
    notification.open(notificationConfig);
  } else if (responseResultCode == "-1") {
    notification.error(notificationConfig);
  } else if (responseResultCode == "1") {
    notification.success(notificationConfig);
  } else if (responseResultCode == "0") {
    notification.warn(notificationConfig);
  } else if (responseResultCode == "2" || responseResultCode == "3") {
    notification.info(notificationConfig);
  }
}
