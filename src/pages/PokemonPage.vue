<template>
  <h1>Who is this Pokemon?</h1>
  <Picture :pokemonId="1" :showPokemon="false" />
  <!-- this component will receive the pokemonId and showPokemon props. It will be responsible for displaying the pokemon shadow image and
  only reveal the pokemon image when showPokemon is true. -->
  <Options />
  <!-- this component will be responsible for displaying the options for the user to choose from. To do so needs getOptions helper-->
</template>

<script>
import Options from "@/components/Options.vue";
import Picture from "@/components/Picture.vue";
import getOptions from "@/helpers/getOptions";

console.log(getOptions());

export default {
  components: {
    Options,
    Picture,
  },
};
</script>

<style></style>
