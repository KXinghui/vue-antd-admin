<template>
  <svg
    class="svg-icon"
    aria-hidden="true"
    style="color: blue;"
    v-on="$listeners"
    v-bind="$props"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "IconSvg",
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    }
  }
};
</script>

<style>
.svg-icon {
  width: 1.1em;
  height: 1.1em;
  vertical-align: -0.15em;
  font-size: 1.1rem;
  fill: #e6eaff;
  fill: currentColor;
  overflow: hidden;
}
</style>
