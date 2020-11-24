<template>
  <div class="identity-register-wrap">
    <a-row type="flex" justify="center">
      <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6">
        <h1 align="center" style="margin-top: 2rem;">{{ ms }}</h1>
      </a-col>
    </a-row>
    <identity-register :identity-role="identityRole"></identity-register>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../components/Mobile/mixins/BaseLayout";
import IdentityRegister from "../../../components/Identity/IdentityRegister";

export default {
  name: "IdentityRegisterView",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityRegister },
  data() {
    return {};
  },
  props: {
    ms: {
      type: [String],
      default: "",
      required: true
    },
    identityRole: {
      type: [String],
      default: "",
      required: true
    }
  }
};
</script>

<style>
.identity-register-wrap {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  /* display: flex;
  justify-content: center; */
}

.identity-register-wrap .identity-register {
  margin-top: 3.2rem;
}

.identity-register-wrap h1 {
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
.identity-register-wrap h1:hover {
  /* color: transparent; */
  color: #eaa254;
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
</style>
