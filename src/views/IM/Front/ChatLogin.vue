<template>
  <div class="chat-login-wrap">
    <a-row type="flex" justify="center">
      <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6">
        <h1 align="center" style="margin-top: 2rem;">IM</h1>
      </a-col>
    </a-row>
    <identity-login identity-role="user"></identity-login>
  </div>
</template>

<script>
import { CHAT_LAYOUT_MIXIN } from "../../../components/IM/mixins/ChatLayout";
import IdentityLogin from "../../../components/Identity/IdentityLogin";

export default {
  name: "ChatLogin",
  mixins: [CHAT_LAYOUT_MIXIN],
  components: { IdentityLogin },
  data() {
    return {};
  }
};
</script>

<style>
.chat-login-wrap {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  /* display: flex;
  justify-content: center; */
}

.chat-login-wrap .identity-login {
  margin-top: 3.2rem;
}

.chat-login-wrap h1 {
  animation: typing 8s;
  /* background: #203; */
  color: #eaa254;
  /* text-shadow: 0 0 0.1em, 0 0 0.3em; */
  /* text-shadow: 0 1px hsl(0, 0%, 85%), 0 2px hsl(0, 0%, 80%),
    0 3px hsl(0, 0%, 75%), 0 4px hsl(0, 0%, 70%), 0 5px hsl(0, 0%, 65%),
    0 5px 10px black;
  text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
    5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black; */
  transition: 0.5s;
}
.chat-login-wrap h1:hover {
  /* color: transparent; */
  color: #eaa254;
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
</style>
