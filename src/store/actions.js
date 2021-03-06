import * as api from "@/api/ujKarakter.api";
import { types as mutationTypes } from "@/store/mutations";

export const types = {
  GET_EXISTING_CHARACTER_NAMES: "GET_EXISTING_CHARACTER_NAMES",
  SET_NEW_CHARACTER: "SET_NEW_CHARACTER"
};

let element = { karakter_name: "" };
export default {
  async [types.GET_EXISTING_CHARACTER_NAMES]({ commit }) {
    const kNames = [];
    const karakterNames = await api.getKarakterNameList();
    for (element of karakterNames) {
      kNames.push(element.karakter_name);
    }
    commit(mutationTypes.SET_EXISTING_CHARACTER_NAMES, kNames);
  },
  [types.SET_NEW_CHARACTER]({ commit }, { faction, race, kClass, crest }) {
    commit(mutationTypes.SET_FACTION, faction);
    commit(mutationTypes.SET_RACE, race);
    commit(mutationTypes.SET_CLASS, kClass);
    commit(mutationTypes.SET_CHARACTER_CREST, crest);
  }
};
