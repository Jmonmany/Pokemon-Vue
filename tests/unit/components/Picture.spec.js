import { shallowMount } from "@vue/test-utils";
import Picture from "@/components/Picture";

describe("Picture.vue component", () => {
  test("should match with the snapshot", () => {
    const wrapper = shallowMount(Picture, {
      props: {
        pokemonId: 1,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("should render the hidden img and the pokemon 100", () => {
    const wrapper = shallowMount(Picture, {
      props: {
        pokemonId: 100,
        // showPokemon: false, by default is false
      },
    });
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${wrapper.props().pokemonId}.svg`;
    const [img1, img2] = wrapper.findAll("img");
    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);
    expect(img1.classes("hidden")).toBeTruthy();
    expect(img1.attributes("src")).toBe(url);
  });
  test("should render the img when showPokemon is true", () => {
    const wrapper = shallowMount(Picture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });
    const [img1, img2] = wrapper.findAll("img");
    expect(img2.exists()).toBeTruthy();
    expect(img1.classes("hidden")).toBeTruthy();
    expect(img2.classes("fade-in")).toBeTruthy();
  });
});
