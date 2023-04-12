import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonArr = Array.from(Array(650));
  return pokemonArr.map((_, index) => index + 1);
  // will return a list of 650 numbers that will be used after sorted randomly to get 4 pokemon ids
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonsName(mixedPokemons.splice(0, 4));
  return pokemons;
  // Here we call getPokemons to save on mixedPokemons the list of 650 numbers randomly sorted.
  // After that we call getPokemonsName to get the name and Ids of the first 4 pokemons in the list.
  // Finally we return the list of 4 pokemons with their Ids and names.
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
    // At the beginning we recieve a list of 4 pokemon ids and we map them to get a list of promises.
    // this array of promises is passed to Promise.all to get the data of the 4 pokemons.
};

export default getPokemonOptions;
