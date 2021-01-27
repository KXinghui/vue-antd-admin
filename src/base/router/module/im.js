// import BaseLayout from "@layouts/BaseLayout.vue";
const MS = "IM";

const ADMIN = [];

export default [
  ...ADMIN,
  {
    path: "/chatUserRecord/:chatUserId",
    name: `${MS}FrontChatUserRecord`,
    component: () =>
      import(
        /* webpackChunkName: "im" */ "@views/IM/Front/chat/ChatUserRecord.vue"
      ),
    props: true
  },
  {
    path: "/chat",
    name: `${MS}FrontChat`,
    component: () =>
      import(/* webpackChunkName: "im-chat" */ "@views/IM/Front/chat/Chat.vue")
  },
  {
    path: "/addressbook",
    name: `${MS}FrontAddressBook`,
    component: () =>
      import(
        /* webpackChunkName: "im" */ "@views/IM/Front/addressbook/AddressBook.vue"
      )
  },
  {
    path: "/my",
    name: `${MS}FrontMy`,
    component: () =>
      import(/* webpackChunkName: "im-my" */ "@views/IM/Front/my/My.vue")
  },
  {
    path: "/my/identity/info",
    name: `${MS}FrontMyIdentityInfo`,
    component: () =>
      import(
        /* webpackChunkName: "im-my" */ "@views/IM/Front/my/IdentityInfo.vue"
      )
  },
  {
    path: "/my/identity/security",
    name: `${MS}FrontMyIdentitySecurity`,
    component: () =>
      import(
        /* webpackChunkName: "im-my" */ "@views/IM/Front/my/IdentitySecurity.vue"
      )
  },
  {
    path: "/my/aboutim",
    name: `${MS}FrontMyAboutIM`,
    component: () =>
      import(/* webpackChunkName: "im-my" */ "@views/IM/Front/my/AboutIM.vue")
  },
  {
    path: "/chatUserFriend/:chatUserId",
    name: `${MS}FrontChatUserFriend`,
    component: () =>
      import(/* webpackChunkName: "im" */ "@views/IM/Front/ChatUserFriend.vue"),
    props: true
  },
  {
    path: "/chatUser/login",
    name: `${MS}FrontChatUserLogin`,
    component: () =>
      import(/* webpackChunkName: "im" */ "@views/IM/Front/ChatLogin.vue")
  }
];
