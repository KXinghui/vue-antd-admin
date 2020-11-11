<template>
  <div>
    <icon icon="Antd_heart"></icon>
    <icon-svg
      icon-class="home"
      style="color: yellow;fill: rgba(0, 0, 255, 0.5);"
    />
    <icon-svg icon-class="log" />
    <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
    <a-icon type="usb" theme="twoTone" two-tone-color="blue" />
    <a-icon type="block" theme="twoTone" two-tone-color="blue" />
    <a-statistic
      title="Active Users"
      :value="112893"
      style="margin-right: 50px"
    />
    <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
    <a-layout
      class="components-layout-demo-custom-trigger"
      v-for="index of 10"
      :key="index"
    >
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <layout-sider-logo :collapsed="collapsed" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-menu-item key="1">
            <a-icon type="user" />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="btn"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <!-- <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px'
          }"
        >
          Content
          <img
            scr="https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=eva&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=undefined&latest=undefined&copyright=undefined&cs=3708925153,3035744045&os=2266125348,3738613539&simid=4243403850,732640267&pn=3&rn=1&di=220&ln=1721&fr=&fmq=1596552028978_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Faa75a819d9cfd32e39d7965543780f803cd30fe8.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined"
          />
          <img
            scr="https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=eva&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3708925153,3035744045&os=2266125348,3738613539&simid=4243403850,732640267&pn=4&rn=1&di=220&ln=1789&fr=&fmq=1596186829673_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Faa75a819d9cfd32e39d7965543780f803cd30fe8.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined"
          />
          <img
            scr="https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=eva&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3708925153,3035744045&os=2266125348,3738613539&simid=4243403850,732640267&pn=4&rn=1&di=220&ln=1789&fr=&fmq=1596186829673_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Faa75a819d9cfd32e39d7965543780f803cd30fe8.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined"
          />
          <img
            scr="https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=eva&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3708925153,3035744045&os=2266125348,3738613539&simid=4243403850,732640267&pn=4&rn=1&di=220&ln=1789&fr=&fmq=1596186829673_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Faa75a819d9cfd32e39d7965543780f803cd30fe8.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined"
          />
          <img
            scr="https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=eva&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3708925153,3035744045&os=2266125348,3738613539&simid=4243403850,732640267&pn=4&rn=1&di=220&ln=1789&fr=&fmq=1596186829673_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Faa75a819d9cfd32e39d7965543780f803cd30fe8.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined"
          />
        </a-layout-content> -->
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import LayoutSiderLogo from "./LayoutSider/LayoutSiderLogo";
import Icon from "@components/Icon";
export default {
  name: "LayoutTest",
  components: {
    Icon,
    LayoutSiderLogo
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>
<style>
.components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

.components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
