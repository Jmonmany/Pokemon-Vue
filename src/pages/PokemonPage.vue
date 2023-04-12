<template>
  <h1>Who is this Pokemon?</h1>
  <Picture :pokemonId="1" :showPokemon="false" />
  <!-- this component will receive the pokemonId and showPokemon props. It will be responsible for displaying the pokemon shadow image and
  only reveal the pokemon image when showPokemon is true. -->
  <Options :pokeOptions="pokemonArray"/>
  <!-- this component will be responsible for displaying the options for the user to choose from. To do so needs getOptions helper-->
</template>

<script>
import Options from "@/components/Options.vue";
import Picture from "@/components/Picture.vue";
import getPokemonOptions from "@/helpers/getOptions";

export default {
  components: {
    Options,
    Picture,
  },
  data() {
    return {
      pokemonArray: [],
    };
  },
  methods: {
    async getMixedOptions() {
      // call the getPokemonOptions helper function and assign the result to pokemonArray
      this.pokemonArray = await getPokemonOptions();
      // if we print pokemonArray here, we will see that it is an reactive object.
      // this means that if we change pokemonArray, the component will be re-rendered
    },
  },
  mounted() {
    // mounted is a Vue hook that is called when the component is mounted to the DOM
    this.getMixedOptions();
  },
};
</script>

<style></style>
