<template>
  <h1>Who is this Pokemon?</h1>
  <Picture :pokemonId="1" :showPokemon="false"/>
  <Options />
</template>

<script>
import Options from "@/components/Options.vue";
import Picture from "@/components/Picture.vue";
import getOptions from "@/helpers/getOptions";

console.log(getOptions())

export default {
  components: {
    Options,
    Picture,
  },
};
</script>

<style></style>
