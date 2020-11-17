<template>
  <tui-image-editor
    :include-ui="useDefaultUI"
    :options="options"
  ></tui-image-editor>
</template>

<script>
import { ImageEditor } from "@toast-ui/vue-image-editor";
import "tui-image-editor/dist/tui-image-editor.min.css";

export default {
  name: "TuiImageEditor",
  components: { "tui-image-editor": ImageEditor },
  data() {
    return {
      useDefaultUI: true,
      options: {
        // for tui-image-editor component's "options" prop
        uiSize: {
          width: 700,
          height: 1200
        },
        includeUI: { menuBarPosition: "top" },
        cssMaxWidth: 700,
        cssMaxHeight: 700
      }
    };
  }
};
</script>

<style></style>
