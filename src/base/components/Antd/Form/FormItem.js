import Vue from "vue";

Vue.component("form-item", {
  mixins: [],
  render(h) {
    let formItem = this.formItem;
    return h(formItem.cmptName, formItem.dataObj);
  },
  props: {
    formItem: {
      type: [Object],
      default: function() {
        return { cmptName: "a-input", dataObj: {} };
      },
      required: false
    }
  }
});
