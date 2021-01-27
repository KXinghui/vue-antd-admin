<template>
  <div :id="parallaxRef">
    <div
      v-for="(layer, index) in layers"
      :key="index"
      :data-depth="layer.dataDepth"
    >
      <img v-if="layer.src" :src="layer.src" />
      <span v-else v-text="layer.text"></span>
    </div>
  </div>
</template>

<script>
import Parallax from "parallax-js";
import "parallax-js/dist/";

export default {
  name: "Parallax",
  data() {
    return {
      parallaxRef: `parallax${this._uid}`
    };
  },
  props: {
    layers: {
      type: [Array],
      default() {
        return [];
      },
      require: true
    }
  },
  mounted() {
    var scene = document.getElementById(this.parallaxRef);
    this.parallax = new Parallax(scene);
  },
  destroyed() {
    this.parallax && this.parallax.destroy();
  }
};
</script>

<style></style>
