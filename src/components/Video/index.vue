<template>
  <div class="video-wrap">
    <video :ref="videoPlayerRef" :class="['video-js', themeClass]"></video>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
// City
import "@videojs/themes/dist/city/index.css";
// Fantasy
import "@videojs/themes/dist/fantasy/index.css";
// Forest
import "@videojs/themes/dist/forest/index.css";
// Sea
import "@videojs/themes/dist/sea/index.css";
import videojs from "video.js";

export default {
  name: "VideoPlayer",
  data() {
    return {
      videoPlayerRef: `video-${this._uid}`,
      player: null,
      defaultOptions: {
        controls: true,
        fill: true,
        responsive: true,
        fluid: true,
        playbackRates: [0.5, 0.75, 1, 1.5, 2, 3]
      }
    };
  },
  props: {
    src: {
      type: [String],
      default: "",
      require: false
    },
    type: {
      type: [String],
      default: "",
      require: false
    },
    liveui: {
      type: [Boolean],
      default: false,
      require: false
    },
    theme: {
      type: [String],
      default: "sea",
      require: false,
      validator(value) {
        return ["city", "fantasy", "forest", "sea"].includes(value);
      }
    },
    options: {
      type: [Object],
      default() {
        return {};
      },
      require: false
    }
  },
  computed: {
    videoPlayerOptions() {
      return Object.assign(
        {
          ...this.defaultOptions,
          // src: this.src,
          sources: [{ src: this.src, type: this.type }],
          liveui: this.liveui
        },
        this.options
      );
    },
    themeClass() {
      return `vjs-theme-${this.theme}`;
    }
  },
  watch: {
    src() {}
  },
  mounted() {
    this.player = videojs(
      this.$refs[this.videoPlayerRef],
      this.videoPlayerOptions,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
    // player操作 https://docs.videojs.com/tutorial-player-workflows.html
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

<style scoped></style>
