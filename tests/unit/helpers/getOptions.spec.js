import getPokemonOptions, {
  getPokemons,
  getPokemonsName,
} from "@/helpers/getOptions.js";

describe("getOptions helper", () => {
  test("getPokemons should return an Array of 650 items", async () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[649]).toBe(650);
    // we check if the array has 650 items and if the first and last item are 1 and 650 respectively.
    // and their are numbers.
  });
  test("getPokemonsName should return an Array of 4 pokemons object", async () => {
    const pokemons = await getPokemonsName([1, 2, 3, 4]);
    expect(pokemons).toEqual([
      { id: 1, name: "bulbasaur" },
      { id: 2, name: "ivysaur" },
      { id: 3, name: "venusaur" },
      { id: 4, name: "charmander" },
    ]);
  });
  test("getPokemonsOptions helper should return a mixed array", async () => {
    const pokemons = await getPokemonOptions();
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
    ]);
  });
});
