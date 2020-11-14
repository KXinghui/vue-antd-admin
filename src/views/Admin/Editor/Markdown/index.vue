<template>
  <div class="markdown-editors">
    <a-card
      hoverable
      style="width: 300px"
      v-for="markdownEditor of markdownEditors"
      :key="markdownEditor.name"
    >
      <template slot="actions" class="ant-card-actions">
        <a-tooltip
          placement="bottom"
          title="Github"
          :get-popup-container="getPopupContainer"
        >
          <a-icon type="github" @click="openWindow(markdownEditor.githubUrl)" />
        </a-tooltip>
        <a-tooltip
          placement="bottom"
          title="OfficialSite"
          :get-popup-container="getPopupContainer"
        >
          <a-icon
            type="home"
            @click="openWindow(markdownEditor.officialSiteUrl)"
          />
        </a-tooltip>
        <a-tooltip
          placement="bottom"
          title="Document"
          :get-popup-container="getPopupContainer"
        >
          <a-icon type="file" @click="openWindow(markdownEditor.documentUrl)" />
        </a-tooltip>
      </template>
      <a-card-meta
        :title="markdownEditor.name"
        :description="markdownEditor.description"
        @click="pushRouter(markdownEditor.routePath)"
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
      markdownEditors: [
        {
          name: "TuiEditor",
          description:
            "TuiEditor —— TOAST UI Editor提供了Markdown模式和WYSIWYG模式。根据您想要的使用类型，例如Markdown的生产，或者只是编辑Markdown。TOAST UI编辑器对于这两种用法都可以有所帮助。它提供Markdown模式和WYSIWYG模式，可以在任何时间点进行切换",
          author: "nhn",
          githubUrl: "https://github.com/nhn/tui.editor",
          officialSiteUrl: "https://ui.toast.com/tui-editor/",
          documentUrl: "https://github.com/nhn/tui.editor",
          routePath: "/editor/markdown/tuiEditor"
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
