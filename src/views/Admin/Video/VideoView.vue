<template>
  <div>
    <!-- :src="src" -->
    <video-player
      :src="src"
      theme="fantasy"
      :options="{
        autoplay: true,
        controls: true,
        poster: publicPath + 'oceans.PNG'
      }"
    ></video-player>
    <!--  type: 'video/mp4' -->
    <!-- sources: [
          {
            src: publicPath + '下载.mp4'
          },
          {
            src: publicPath + 'oceans.mp4'
          }
        ], -->
    {{ publicPath + "oceans.mp4" }}
    <a-input :value="src" @change="changeSrc"></a-input>
  </div>
</template>

<script>
import VideoPlayer from "../../../components/Video";
const publicPath = process.env.BASE_URL;
const src = `${publicPath}林子祥 长路漫漫伴你闯.m4a`;

export default {
  name: "",
  components: { VideoPlayer },
  data() {
    return {
      src,
      publicPath,
      srcPath: ""
    };
  },
  methods: {
    changeSrc(e) {
      this.srcPath = e.target.value;
      this.src = this.srcPath;
    }
  }
};
</script>

<style></style>
