import { shallowMount } from "@vue/test-utils";
import Options from "@/components/Options";
import { pokemonsMock } from "../mocks/pokemons.mock.js";
describe("Options.vue component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Options, {
      props: {
        pokeOptions: pokemonsMock,
      },
    });
  });

  test("should match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("should render the 4 options correctly", () => {
    const options = wrapper.findAll("li");
    expect(options.length).toBe(4);
    expect(options[0].text()).toBe("bulbasaur");
    expect(options[1].text()).toBe("ivysaur");
    expect(options[2].text()).toBe("venusaur");
    expect(options[3].text()).toBe("charmander");
  });
  test("should emit an event with the correct payload", () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");
    li1.trigger("click");
    expect(wrapper.emitted("selection")[0]).toEqual([1]);
    li2.trigger("click");
    expect(wrapper.emitted("selection")[1]).toEqual([2]);
    li3.trigger("click");
    expect(wrapper.emitted("selection")[2]).toEqual([3]);
    li4.trigger("click");
    expect(wrapper.emitted("selection")[3]).toEqual([4]);
  });
});
