import BaseLayout from "@layouts/BaseLayout.vue";
const MS = "Pvtnote";

const ADMIN = [
  {
    path: "/pvtnote",
    name: "PvtNote",
    component: BaseLayout,
    children: [
      {
        path: "table/note",
        name: "NoteTableView",
        component: () =>
          import(
            /* webpackChunkName: "note" */ "../../views/PvtNote/Admin/Note/table/index.vue"
          )
      }
    ]
  }
];

export default [
  ...ADMIN,
  {
    path: "/pvtnote/note",
    name: `${MS}FrontNote`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote-note" */ "@views/PvtNote/Front/note/Note.vue"
      )
  },
  {
    // search 和 detail 相似的path 要么把search放到前面；要么把detail的path修改
    path: "/pvtnote/note/search",
    name: `${MS}FrontNoteSearch`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote-note" */ "../../views/PvtNote/Front/note/NoteSearch.vue"
      ),
    props: true
  },
  {
    // search 和 detail 相似的path 要么把search放到前面；要么把detail的path修改
    path: "/pvtnote/note/edit",
    name: `${MS}FrontNoteInsert`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote-note" */ "../../views/PvtNote/Front/note/NoteEdit.vue"
      )
  },
  {
    // search 和 detail 相似的path 要么把search放到前面；要么把detail的path修改
    path: "/pvtnote/note/edit/:noteId",
    name: `${MS}FrontNoteEdit`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote-note" */ "../../views/PvtNote/Front/note/NoteEdit.vue"
      ),
    props: true
  },
  {
    path: "/pvtnote/note/:noteId",
    name: `${MS}FrontNoteDetail`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote-note" */ "@views/PvtNote/Front/note/NoteDetail.vue"
      ),
    props: true
  },
  {
    path: "/pvtnote/my",
    name: `${MS}FrontMy`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote-my" */ "@views/PvtNote/Front/my/My.vue"
      )
  },
  {
    path: "/pvtnote/my/identity/info",
    name: `${MS}FrontMyIdentityInfo`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote-my" */ "../../views/PvtNote/Front/my/IdentityInfo.vue"
      )
  },
  {
    path: "/pvtnote/my/identity/security",
    name: `${MS}FrontMyIdentitySecurity`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote-my" */ "../../views/PvtNote/Front/my/IdentitySecurity.vue"
      )
  },
  {
    path: "/pvtnote/my/aboutpvtnote",
    name: `${MS}FrontMyAboutPvtNote`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote-my" */ "@views/PvtNote/Front/my/AboutPvtNote.vue"
      )
  },
  {
    path: "/pvtnote/login",
    name: `${MS}FrontUserLogin`,
    component: () =>
      import(/* webpackChunkName: "pvtnote" */ "@views/PvtNote/Front/Login.vue")
  },
  {
    path: "/pvtnote/register",
    name: `${MS}FrontUserRegister`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote" */ "@views/PvtNote/Front/Register.vue"
      )
  }
];
