// 提交
// 重置
// 校验

export const HORIZONTAL = "horizontal";
export const VERTICAL = "vertical";
export const INLINE = "inline";

export const FORM_MIXIN = {
  data() {
    return {
      formOption: {
        // VERTICAL HORIZONTAL INLINE
        layout: HORIZONTAL
      }
    };
  },
  computed: {
    formItemLayout() {
      const { layout } = this.formOption;
      return layout === HORIZONTAL
        ? {
            labelCol: { span: 5, offset: 1 },
            wrapperCol: { span: 17, offset: 1 },
            labelAlign: "right"
          }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this.formOption;
      return layout === HORIZONTAL
        ? {
            wrapperCol: { span: 24 /* , offset: 1 */ }
          }
        : {};
    }
  }
};
