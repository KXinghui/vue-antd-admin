<template>
  <a-dropdown :trigger="['contextmenu']">
    <div
      :style="{
        textAlign: 'center',
        background: '#f7f7f7',
        height: '200px',
        lineHeight: '200px',
        color: '#777'
      }"
    >
      Right Click on here
    </div>
    <a-menu slot="overlay">
      <a-menu-item key="1">
        1st menu item
      </a-menu-item>
      <a-menu-item key="2">
        2nd menu item
      </a-menu-item>
      <a-menu-item key="3">
        3rd menu item
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {};
</script>

<style></style>
