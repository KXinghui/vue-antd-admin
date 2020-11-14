<template>
  <div class="image-editors">
    <a-card
      hoverable
      style="width: 300px"
      v-for="imageEditor of imageEditors"
      :key="imageEditor.name"
    >
      <template slot="actions" class="ant-card-actions">
        <a-tooltip
          placement="bottom"
          title="Github"
          :get-popup-container="getPopupContainer"
        >
          <a-icon type="github" @click="openWindow(imageEditor.githubUrl)" />
        </a-tooltip>
        <a-tooltip
          placement="bottom"
          title="OfficialSite"
          :get-popup-container="getPopupContainer"
        >
          <a-icon
            type="home"
            @click="openWindow(imageEditor.officialSiteUrl)"
          />
        </a-tooltip>
        <a-tooltip
          placement="bottom"
          title="Document"
          :get-popup-container="getPopupContainer"
        >
          <a-icon type="file" @click="openWindow(imageEditor.documentUrl)" />
        </a-tooltip>
      </template>
      <a-card-meta
        :title="imageEditor.name"
        :description="imageEditor.description"
        @click="pushRouter(imageEditor.routePath)"
      >
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import router from "@router";

export default {
  name: "RichTextView",
  data() {
    return {
      imageEditors: [
        {
          name: "TuiImageEditor",
          description:
            "TuiImageEditor —— TOAST UI Editor提供了Markdown模式和WYSIWYG模式。根据您想要的使用类型，例如Markdown的生产，或者只是编辑Markdown。TOAST UI编辑器对于这两种用法都可以有所帮助。它提供Markdown模式和WYSIWYG模式，可以在任何时间点进行切换",
          author: "nhn",
          githubUrl: "https://github.com/nhn/tui.editor",
          officialSiteUrl: "https://ui.toast.com/tui-editor/",
          documentUrl: "https://github.com/nhn/tui.editor",
          routePath: "/editor/image/tuiImageEditor"
        }
      ]
    };
  },
  methods: {
    openWindow(url) {
      window.open(url);
    },
    pushRouter(routePath) {
      router.push(routePath);
    },
    getPopupContainer(trigger) {
      return trigger.parentElement;
    }
  }
};
</script>

<style></style>
