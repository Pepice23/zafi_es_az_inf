<template>
  <div>
    <NameInput />
    <GenderSelect />
    <RaceClassPicker />
  </div>
</template>

<script>
import GenderSelect from "@/components/GenderSelect.vue";
import NameInput from "@/components/NameInput.vue";
import RaceClassPicker from "@/components/RaceClassPicker.vue";

export default {
  name: "CharacterCreator",
  components: { RaceClassPicker, NameInput, GenderSelect },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
