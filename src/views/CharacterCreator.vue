<template>
  <div>
    <NameInput @validCharacterName="getKarakterNev" />
    <GenderSelect @genderSelected="getKarakterGender" />
    <RaceClassPicker @factionRaceClass="getKarakterFRC" />

    {{ karakterNev }} - {{ karakterGender }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GenderSelect from "@/components/GenderSelect.vue";
import NameInput from "@/components/NameInput.vue";
import RaceClassPicker from "@/components/RaceClassPicker.vue";

export default defineComponent({
  name: "CharacterCreator",
  components: { RaceClassPicker, NameInput, GenderSelect },
  data() {
    return { karakterNev: "", karakterGender: "", karakterFRC: {} };
  },
  methods: {
    getKarakterNev(nev) {
      this.karakterNev = nev;
    },
    getKarakterGender(gender) {
      this.karakterGender = gender;
    },
    getKarakterFRC(fRC) {
      this.karakterFRC = fRC;
    }
  }
});
</script>

<style scoped></style>
