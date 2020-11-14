<template>
  <div class="code-editors">
    <a-card
      hoverable
      style="width: 300px"
      v-for="codeEditor of codeEditors"
      :key="codeEditor.name"
    >
      <template slot="actions" class="ant-card-actions">
        <a-tooltip
          placement="bottom"
          title="Github"
          :get-popup-container="getPopupContainer"
        >
          <a-icon type="github" @click="openWindow(codeEditor.githubUrl)" />
        </a-tooltip>
        <a-tooltip
          placement="bottom"
          title="OfficialSite"
          :get-popup-container="getPopupContainer"
        >
          <a-icon type="home" @click="openWindow(codeEditor.officialSiteUrl)" />
        </a-tooltip>
        <a-tooltip
          placement="bottom"
          title="Document"
          :get-popup-container="getPopupContainer"
        >
          <a-icon type="file" @click="openWindow(codeEditor.documentUrl)" />
        </a-tooltip>
      </template>
      <a-card-meta
        :title="codeEditor.name"
        :description="codeEditor.description"
        @click="pushRouter(codeEditor.routePath)"
      >
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import router from "@router";

export default {
  name: "CodeView",
  data() {
    return {
      codeEditors: [
        {
          name: "MonacoEditor",
          description: "MonacoEditor",
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
