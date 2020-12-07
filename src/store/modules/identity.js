/* eslint-disable no-unused-vars */
import store from "@utils/store";
import { genRouters } from "../../router/routes";
// import { login, logout, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  identity: { nickname: "kxh", chatNo: "kxh17666" },
  roles: [
    { id: "01", enCode: "SysUser" },
    { id: "02", enCode: "User" },
    { id: "03", enCode: "ChatUser" },
    { id: "04", enCode: "ActiveUser" },
    { id: "05", enCode: "UnActiveUser" }
  ],
  permissions: [
    { id: "01", enCode: "Insert" },
    // { id: "02", enCode: "Delete" },
    { id: "03", enCode: "Update" },
    { id: "04", enCode: "Export" },
    { id: "05", enCode: "Import" }
  ]
};

const getters = {
  routes: state => {
    return genRouters(state.permissions);
  }
};

const mutations = {
  SET_IDENTITY: (state, identity, properties) => {
    let realIdentity = {};
    if (properties) {
      if (Array.isArray(properties)) {
        properties.forEach(value => {
          realIdentity[value] = identity[value];
        });
      }
      if (typeof properties === "string") {
        realIdentity[properties] = identity[properties];
      }
      Object.assign(state.identity, realIdentity);
    } else {
      state.identity = identity;
    }
    store.set("identity", state.identity);
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions;
  },
  // GET_IDENTITY: state => state.identity,
  // GET_ROLES: state => state.permissions,
  // GET_PERMISSIONS: state => state.permissions,
  BIND_MAIL: (state, mail) => {
    state.identity.mail = mail;
  },
  BIND_MOBILE: (state, mobile) => {
    state.identity.mobile = mobile;
  },
  UPLOAD_AVATAR: (state, avatarUrl) => {
    state.identity.avatarUrl = avatarUrl;
  },
  LOGIN: (state, identity) => {
    state.identity = identity;
  },
  LOGOUT: state => {
    state.identity = null;
  }
};

const actions = {
  Login(context, identity) {},
  Logout(context, identity) {}
};

// const identity = {
//   namespaced: true,
//   state,
//   getters,
//   mutations
//   actions: {
//     // 登录
//     Login({ commit }, userInfo) {
//       const username = userInfo.username.trim()
//       const password = userInfo.password
//       const code = userInfo.code
//       const uuid = userInfo.uuid
//       return new Promise((resolve, reject) => {
//         login(username, password, code, uuid).then(res => {
//           setToken(res.token)
//           commit('SET_TOKEN', res.token)
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },
//     // 获取用户信息
//     GetInfo({ commit, state }) {
//       return new Promise((resolve, reject) => {
//         getInfo(state.token).then(res => {
//           const user = res.user
//           const avatar = user.avatar == "" ? require("@/assets/image/profile.jpg") : process.env.VUE_APP_BASE_API + user.avatar;
//           if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
//             commit('SET_ROLES', res.roles)
//             commit('SET_PERMISSIONS', res.permissions)
//           } else {
//             commit('SET_ROLES', ['ROLE_DEFAULT'])
//           }
//           commit('SET_NAME', user.userName)
//           commit('SET_AVATAR', avatar)
//           resolve(res)
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },
//     // 退出系统
//     LogOut({ commit, state }) {
//       return new Promise((resolve, reject) => {
//         logout(state.token).then(() => {
//           commit('SET_TOKEN', '')
//           commit('SET_ROLES', [])
//           commit('SET_PERMISSIONS', [])
//           removeToken()
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },
//     // 前端 登出
//     FedLogOut({ commit }) {
//       return new Promise(resolve => {
//         commit('SET_TOKEN', '')
//         removeToken()
//         resolve()
//       })
//     }
//   }
// };

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
