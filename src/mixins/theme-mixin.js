export const THEME_MIXIN = {
  data() {
    return {
      headTitle: "",
      headHref: ""
    };
  },
  props: {
    theme: {
      type: [String],
      default: "dark",
      required: false,
      validator(value) {
        return ["dark", "light"].includes(value);
      }
    }
  },
  computed: {
    themeClass() {
      let theme = this.theme.toLowerCase();
      return `theme-${theme}`;
    }
  }
};
