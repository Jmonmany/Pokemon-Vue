import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonArr = Array.from(Array(650));
  return pokemonArr.map((_, index) => index + 1);
};

const getPokemonsOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonsName(mixedPokemons.splice(0, 4));
  return pokemons;
};

const getPokemonsName = async ([a, b, c, d] = []) => {
    const pokemonPromises = [a, b, c, d].map((id) => pokemonApi.get(`/${id}`));
    const [pokemonA, pokemonB, pokemonC, pokemonD] = await Promise.all(
        pokemonPromises
    );
    return [
        { id: pokemonA.data.id, name: pokemonA.data.name },
        { id: pokemonB.data.id, name: pokemonB.data.name },
        { id: pokemonC.data.id, name: pokemonC.data.name },
        { id: pokemonD.data.id, name: pokemonD.data.name },
    ];
};

export default getPokemonsOptions;
