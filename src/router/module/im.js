export default [
  {
    path: "/chatUserRecord/:chatUserId",
    name: "FrontChatUserRecord",
    component: () =>
      import(
        /* webpackChunkName: "im" */ "@views/IM/Front/chat/ChatUserRecord.vue"
      ),
    props: true
  },
  {
    path: "/chat",
    name: "FrontChat",
    component: () =>
      import(/* webpackChunkName: "im-chat" */ "@views/IM/Front/chat/Chat.vue")
  },
  {
    path: "/addressbook",
    name: "FrontAddressBook",
    component: () =>
      import(
        /* webpackChunkName: "im" */ "@views/IM/Front/addressbook/AddressBook.vue"
      )
  },
  {
    path: "/my",
    name: "FrontMy",
    component: () =>
      import(/* webpackChunkName: "im-my" */ "@views/IM/Front/my/My.vue")
  },
  {
    path: "/my/identity/info",
    name: "FrontMyIdentityInfo",
    component: () =>
      import(
        /* webpackChunkName: "im-my" */ "@views/IM/Front/my/IdentityInfo.vue"
      )
  },
  {
    path: "/my/identity/security",
    name: "FrontMyIdentitySecurity",
    component: () =>
      import(
        /* webpackChunkName: "im-my" */ "@views/IM/Front/my/IdentitySecurity.vue"
      )
  },
  {
    path: "/my/aboutim",
    name: "FrontMyAboutIM",
    component: () =>
      import(/* webpackChunkName: "im-my" */ "@views/IM/Front/my/AboutIM.vue")
  },
  {
    path: "/chatUserFriend/:chatUserId",
    name: "FrontChatUserFriend",
    component: () =>
      import(/* webpackChunkName: "im" */ "@views/IM/Front/ChatUserFriend.vue"),
    props: true
  },
  {
    path: "/chatUser/login",
    name: "FrontChatUserLogin",
    component: () =>
      import(/* webpackChunkName: "im" */ "@views/IM/Front/ChatLogin.vue")
  }
];
