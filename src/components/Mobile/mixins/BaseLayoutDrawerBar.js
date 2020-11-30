import BaseDrawerBar from "../layouts/BaseDrawerBar.vue";

const DRAWER_BAR_DELAY = 180;

export const BASE_LAYOUT_DRAWER_BAR_MIXIN = {
  components: {
    BaseDrawerBar
  },
  data() {
    return {
      topDrawerBarVisible: false,
      bottomDrawerBarVisible: false,
      resetTopDrawerBarHeightPercent: "7.25%",
      resetBottomDrawerBarHeightPercent: "7.25%",
      topDrawerBarHeightPercent: "7.25%",
      bottomDrawerBarHeightPercent: "7.25%"
    };
  },
  computed: {},
  methods: {
    resetDrawerBar() {
      this.topDrawerBarHeightPercent = this.resetTopDrawerBarHeightPercent;
      this.bottomDrawerBarHeightPercent = this.resetBottomDrawerBarHeightPercent;
    },
    showDrawerBar() {
      this.hideDrawerBar();
      let timer = setTimeout(() => {
        this.topDrawerBarVisible = true;
        this.bottomDrawerBarVisible = true;
        clearTimeout(timer);
      }, DRAWER_BAR_DELAY);
    },
    hideDrawerBar() {
      this.topDrawerBarVisible = false;
      this.bottomDrawerBarVisible = false;
      this.resetDrawerBar();
    },
    showTopDrawerBar(heightPercent) {
      this.hideDrawerBar();
      let timer = setTimeout(() => {
        this.topDrawerBarHeightPercent = heightPercent;
        this.topDrawerBarVisible = true;
        clearTimeout(timer);
      }, DRAWER_BAR_DELAY);
    },
    showBottomDrawerBar(heightPercent) {
      this.hideDrawerBar();
      let timer = setTimeout(() => {
        this.bottomDrawerBarHeightPercent = heightPercent;
        this.bottomDrawerBarVisible = true;
        clearTimeout(timer);
      }, DRAWER_BAR_DELAY);
    }
  }
};
