import * as api from "@/api/ujKarakter.api";
import { types as mutationTypes } from "@/store/mutations";

export const types = {
  GET_EXISTING_CHARACTER_NAMES: "GET_EXISTING_CHARACTER_NAMES"
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
  }
};
