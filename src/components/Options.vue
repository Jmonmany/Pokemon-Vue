<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokeOptions" :key="pokemon.id" @click="$emit('selection', pokemon.id)">
        {{ pokemon.name }}
      </li>
      <!-- the $emit method is used to emit an event to the parent component -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokeOptions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
