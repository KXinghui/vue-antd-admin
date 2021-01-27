<template>
  <div class="comment-item-wrap"></div>
</template>

<script>
export default {
  name: "CommentItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: [Object],
      default() {
        return { praiseNum: 0, treadNum: 0, content: "", isTop: 1 };
      },
      required: true
    }
  }
};
</script>

<style></style>
