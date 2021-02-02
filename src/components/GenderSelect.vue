<template>
  <div class="row text-center">
    <div class="col">
      <button
        :class="['btn', isSelectedM ? 'btn-success' : 'btn-primary']"
        @click="onMaleSelect"
      >
        Male
      </button>
    </div>
    <div class="col">
      <button
        :class="['btn', isSelectedF ? 'btn-success' : 'btn-primary']"
        @click="onFemaleSelect"
      >
        Female
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenderSelect",
  data() {
    return { isSelectedM: false, isSelectedF: false, selectedGender: "" };
  },
  methods: {
    onMaleSelect() {
      this.selectedGender = "Male";
      this.isSelectedM = true;
      this.isSelectedF = false;
      this.$emit("genderSelected", this.selectedGender);
    },
    onFemaleSelect() {
      this.selectedGender = "Female";
      this.isSelectedM = false;
      this.isSelectedF = true;
      this.$emit("genderSelected", this.selectedGender);
    }
  }
};
</script>

<style scoped></style>
