import pokemonApi from "@/api/pokemonApi";

describe("pokemnApi", () => {
  test("Axios should been configured with pokemon api", async () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
