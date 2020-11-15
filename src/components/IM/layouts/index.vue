<template>
  <div class="im-layout">
    <chat-header></chat-header>
    <chat-main></chat-main>
    <chat-tab-bar></chat-tab-bar>
  </div>
</template>

<script>
import ChatHeader from "./ChatHeader";
import ChatMain from "./ChatMain";
import ChatTabBar from "./ChatTabBar";

export default {
  name: "IMLayout",
  components: {
    ChatHeader,
    ChatMain,
    ChatTabBar
  }
};
</script>

<style></style>
