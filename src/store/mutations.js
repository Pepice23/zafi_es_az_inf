export const types = {
  SET_CHARACTER_NAME: "SET_CHARACTER_NAME",
  SET_GENDER: "SET_GENDER",
  SET_FACTION: "SET_FACTION",
  SET_RACE: "SET_RACE",
  SET_CLASS: "SET_CLASS",
  SET_CHARACTER_CREST: "SET_CHARACTER_CREST",
  SET_EXISTING_CHARACTER_NAMES: "SET_EXISTING_CHARACTER_NAMES"
};
export default {
  [types.SET_CHARACTER_NAME](state, newCharacterName) {
    state.ujKarakter.karakterNev = newCharacterName;
  },
  [types.SET_EXISTING_CHARACTER_NAMES](state, newCharacterNames) {
    state.meglevoKarakterNevek = newCharacterNames;
  },
  [types.SET_GENDER](state, gender) {
    state.ujKarakter.karakterGender = gender;
  },
  [types.SET_FACTION](state, faction) {
    state.ujKarakter.karakterFaction = faction;
  },
  [types.SET_RACE](state, race) {
    state.ujKarakter.karakterRace = race;
  },
  [types.SET_CLASS](state, kClass) {
    state.ujKarakter.karakterClass = kClass;
  },
  [types.SET_CHARACTER_CREST](state, pictureString) {
    state.ujKarakter.karakterPicture = pictureString;
  }
};
