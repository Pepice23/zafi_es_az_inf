export const types = {
  SET_CHARACTER_NAME: "SET_CHARACTER_NAME",
  SET_EXISTING_CHARACTER_NAMES: "SET_EXISTING_CHARACTER_NAMES"
};
export default {
  [types.SET_CHARACTER_NAME](state, newCharacterName) {
    state.ujKarakter.karakterNev = newCharacterName;
  },
  [types.SET_EXISTING_CHARACTER_NAMES](state, newCharacterNames) {
    state.meglevoKarakterNevek = newCharacterNames;
  }
};
