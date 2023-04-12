<template>
  <h1 v-if="!selectedPokemon">Wait a bit please...</h1>
  <div v-else>
    <h1>Who is this Pokemon?</h1>
    <Picture :pokemonId="selectedPokemon.id" :showPokemon="showSwitch" />
    <!-- this component will receive the pokemonId and showPokemon props. It will be responsible for displaying the pokemon shadow image and
  only reveal the pokemon image when showPokemon is true. -->
    <Options :pokeOptions="pokemonArray" @selection="checkAnswer($event)" />
    <!-- this component will be responsible for displaying the options for the user to choose from. To do so needs getOptions helper-->
    <!-- selection method is a custom method we create on Options.vue -->
    <div v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame()">New Game</button>
    </div>
    <!-- we can substitute <div v-if> tag with template tag, to avoid unnecessary divs in the DOM -->
  </div>
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
      selectedPokemon: null,
      showSwitch: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async getMixedOptions() {
      // call the getPokemonOptions helper function and assign the result to pokemonArray
      this.pokemonArray = await getPokemonOptions();
      // if we print pokemonArray here, we will see that it is an reactive object.
      // this means that if we change pokemonArray, the component will be re-rendered
      const randomNumber = Math.floor(Math.random() * 4);
      this.selectedPokemon = this.pokemonArray[randomNumber];
    },
    checkAnswer(id) {
      this.showSwitch = true;
      this.showAnswer = true;
      if (id === this.selectedPokemon.id) {
        this.message = `Correct! The pokemon is ${this.selectedPokemon.name}`;
      } else {
        this.message = `Oops! It was ${this.selectedPokemon.name}`;
      }
    },
    newGame() {
      this.showSwitch = false;
      this.showAnswer = false;
      this.selectedPokemon = null;
      this.getMixedOptions();
    },
  },
  mounted() {
    // mounted is a Vue hook that is called when the component is mounted to the DOM
    this.getMixedOptions();
  },
};
</script>

<style></style>
