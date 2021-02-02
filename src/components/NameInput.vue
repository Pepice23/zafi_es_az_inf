<template>
  <div class="row text-center">
    <div class="col form-group">
      <label for="name">Karakternév:</label>
      <input
        type="text"
        class="form-control w-50 offset-3"
        id="name"
        v-model="characterName"
      />
      <button class="btn btn-primary mt-2" @click="handleClick">
        Karakternév ellenőrzése
      </button>
    </div>
  </div>
</template>

<script>
import {
  forbiddenNames,
  forbiddenNumbers,
  forbiddenSymbols
} from "@/helpers/forbiddenNames";

export default {
  name: "NameInput",
  data() {
    return {
      characterName: "",
      nameError: "A név nem megfelelő! Válassz másikat.",
      creationError: "",
      creationComplete: "",
      hasError: false
    };
  },
  methods: {
    handleClick() {
      this.checkName(this.characterName, forbiddenNames);
      this.checkName(this.characterName, forbiddenNumbers);
      this.checkName(this.characterName, forbiddenSymbols);
      if (!this.hasError) {
        this.creationError = "";
        this.creationComplete = "";
        this.$emit("validCharacterName", this.characterName);
      }
    },
    checkName(charName, nastyNames) {
      charName = charName.toLowerCase();
      const happened = [];
      for (const name of nastyNames) {
        if (charName.includes(name)) {
          happened.push(name);
        }
      }
      if (happened.length !== 0 || charName.length < 3) {
        this.hasError = true;
        setTimeout(() => {
          this.hasError = false;
        }, 3000);
      }
    }
  }
};
</script>

<style scoped></style>
