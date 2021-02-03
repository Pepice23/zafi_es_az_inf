import { createStore } from "vuex";

import mutations from "@/store/mutations";
import actions from "@/store/actions";

export default createStore({
  state: {
    ujKarakter: {
      karakterNev: "",
      karakterGender: "",
      karakterFaction: "",
      karakterRace: "",
      karakterClass: "",
      karakterPicture: ""
    },
    meglevoKarakterNevek: []
  },
  mutations,
  actions,
  modules: {}
});
