<template>
  <div class="rich-text-editors">
    <a-card
      hoverable
      style="width: 300px"
      v-for="richTextEditor of richTextEditors"
      :key="richTextEditor.name"
    >
      <template slot="actions" class="ant-card-actions">
        <a-tooltip
          placement="bottom"
          title="Github"
          :get-popup-container="getPopupContainer"
        >
          <a-icon type="github" @click="openWindow(richTextEditor.githubUrl)" />
        </a-tooltip>
        <a-tooltip
          placement="bottom"
          title="OfficialSite"
          :get-popup-container="getPopupContainer"
        >
          <a-icon
            type="home"
            @click="openWindow(richTextEditor.officialSiteUrl)"
          />
        </a-tooltip>
        <a-tooltip
          placement="bottom"
          title="Document"
          :get-popup-container="getPopupContainer"
        >
          <a-icon type="file" @click="openWindow(richTextEditor.documentUrl)" />
        </a-tooltip>
      </template>
      <a-card-meta
        :title="richTextEditor.name"
        :description="richTextEditor.description"
        @click="pushRouter(richTextEditor.routePath)"
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
      richTextEditors: [
        {
          name: "WangEditor",
          description:
            "WangEditor —— 轻量级 web 富文本编辑器，配置方便，使用简单。支持 IE10+ 浏览器",
          author: "wangfupeng1988",
          githubUrl: "https://github.com/wangfupeng1988/wangEditor",
          officialSiteUrl: "http://www.wangeditor.com",
          documentUrl: "https://www.kancloud.cn/wangfupeng/wangeditor3/332599",
          routePath: "/editor/richText/wangEditor"
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
