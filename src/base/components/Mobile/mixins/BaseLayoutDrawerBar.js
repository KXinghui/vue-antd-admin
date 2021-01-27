import BaseDrawerBar from "../layouts/BaseDrawerBar.vue";
import { BASE_LAYOUT_MIXIN } from "./BaseLayout";

const DRAWER_BAR_DELAY = 180;

export const BASE_LAYOUT_DRAWER_BAR_MIXIN = {
  mixins: [BASE_LAYOUT_MIXIN],
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
      // this.showTabBarCenter();
      let timer = setTimeout(() => {
        this.topDrawerBarVisible = true;
        this.bottomDrawerBarVisible = true;
        clearTimeout(timer);
      }, DRAWER_BAR_DELAY);
      let timer2 = setTimeout(() => {
        this.hideTabBarCenter();
        clearTimeout(timer2);
      }, DRAWER_BAR_DELAY + 200);
    },
    hideDrawerBar(isTabBarCenter = true) {
      this.topDrawerBarVisible = false;
      this.bottomDrawerBarVisible = false;
      this.resetDrawerBar();
      if (isTabBarCenter) {
        this.showTabBarCenter();
      }
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
      // this.showTabBarCenter();
      let timer = setTimeout(() => {
        this.bottomDrawerBarHeightPercent = heightPercent;
        this.bottomDrawerBarVisible = true;
        this.hideTabBarCenter();
        clearTimeout(timer);
      }, DRAWER_BAR_DELAY);
    }
  }
};
