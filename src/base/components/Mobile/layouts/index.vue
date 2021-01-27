<template>
  <div class="mobile-layout">
    <base-header></base-header>
    <base-main></base-main>
    <base-tab-bar></base-tab-bar>
  </div>
</template>

<script>
import BaseHeader from "./BaseHeader";
import BaseMain from "./BaseMain";
import BaseTabBar from "./BaseTabBar";

export default {
  name: "IMLayout",
  components: {
    BaseHeader,
    BaseMain,
    BaseTabBar
  }
};
</script>

<style></style>
