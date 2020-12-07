const MS = "Pvtnote";

export default [
  {
    path: "/pvtnote/note",
    name: `${MS}FrontNote`,
    component: () =>
      import(
        /* webpackChunkName: "pvtnote-note" */ "@views/PvtNote/Front/note/Note.vue"
      )
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
