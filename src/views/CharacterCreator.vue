<template>
  <div class="container-fluid">
    <Flag />
    <NameInput />
    <GenderSelect />
    <RaceClassPicker />
    <p>
      {{ $store.state.ujKarakter.karakterNev }} -
      {{ $store.state.ujKarakter.karakterFaction }} -
      {{ $store.state.ujKarakter.karakterGender }} -
      {{ $store.state.ujKarakter.karakterRace }} -
      {{ $store.state.ujKarakter.karakterClass }}
    </p>
    <CharacterPanelPreview />
  </div>
</template>

<script>
import GenderSelect from "@/components/GenderSelect.vue";
import NameInput from "@/components/NameInput.vue";
import RaceClassPicker from "@/components/RaceClassPicker.vue";
import Flag from "@/components/Flag";
import CharacterPanelPreview from "@/components/CharacterPanelPreview";

export default {
  name: "CharacterCreator",
  components: {
    CharacterPanelPreview,
    Flag,
    RaceClassPicker,
    NameInput,
    GenderSelect
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
