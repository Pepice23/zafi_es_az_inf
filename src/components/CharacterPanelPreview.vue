<template>
  <div v-if="$store.state.ujKarakter.karakterPicture">
    <img src="../assets/crests/Shaman.png" alt="crest" class="crest" />
    {{ $store.state.ujKarakter.karakterPicture }}
  </div></template
>

<script>
export default {
  name: "CharacterPanelPreview"
};
</script>

<style scoped>
.miniFlag {
  width: 50px;
  height: 50px;
}
.crest {
  width: 200px;
  height: 200px;
}
</style>
