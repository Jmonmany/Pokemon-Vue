<template>
  <div class="pokemon-container">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      alt="pokemon"
      class="fade-in"
    />
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      alt="pokemon"
      class="hidden"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  height: 200px;
  position: absolute;
  right: 44%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden {
  filter: brightness(0);
}
.pokemon-container {
  height: 200px;
}
</style>
