import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { pokemonsMock } from "../mocks/pokemons.mock";

describe("PokemonPage.vue component", () => {
  let mixSpy;
  beforeEach(() => {
    mixSpy = jest.spyOn(PokemonPage.methods, "getMixedOptions");
  });
  test("should call the getMixedoptions method when mounted", () => {
    expect(mixSpy).toHaveBeenCalled();
  });
  test("should match the snapshot AFTER render component with some pokemons", () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonArray: pokemonsMock,
          selectedPokemon: pokemonsMock[0],
          showSwitch: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("should render Options and Picture components", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArray: pokemonsMock,
          selectedPokemon: pokemonsMock[0],
          showSwitch: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    // console.log(wrapper.vm.$data);
    // this will console de data object
    const options = wrapper.find("options-stub");
    const picture = wrapper.find("picture-stub");
    expect(options.exists()).toBeTruthy();
    expect(picture.exists()).toBeTruthy();
    // console.log(picture.attributes())
    expect(picture.attributes("pokemonid")).toBe("1");
    // apparently the attribute we are sending to the component is pokemonId, but
    // once we console the attributes, it is pokemonid (lowercase i)
    expect(options.attributes("pokeoptions")).toBeTruthy();
    // same here, we are sending pokeOptions, but it is rendered as pokeoptions
  });
  test("checkAnswer method should work correctly", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArray: pokemonsMock,
          selectedPokemon: pokemonsMock[0],
          showSwitch: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    await wrapper.vm.checkAnswer(1);
    const h2 = wrapper.find("h2");
    expect(h2.exists()).toBeTruthy();
    expect(wrapper.vm.showSwitch).toBeTruthy();
  });
});
