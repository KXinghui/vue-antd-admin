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
  </div>
</template>

<script>
import VideoPlayer from "../../../components/Video";
const publicPath = process.env.BASE_URL;
const src = `${publicPath}胡彦斌 月光.mp3`;

export default {
  name: "",
  components: { VideoPlayer },
  data() {
    return {
      src,
      publicPath
    };
  }
};
</script>

<style></style>
