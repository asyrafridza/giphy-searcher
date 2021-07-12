import SearchBar from "./SearchBar";
import { createShallow } from "@material-ui/core/test-utils";
import { TextField } from "@material-ui/core";

describe("SearchBar component", () => {
  let shallow;

  beforeAll(() => (shallow = createShallow()));

  test("renders", () => {
    const wrapper = shallow(<SearchBar />);

    const isSearchBarExists = wrapper.exists();

    expect(isSearchBarExists).toBeTruthy();
  });

  test("user text is displayed", () => {
    const wrapper = shallow(<SearchBar onChangeSearchBar={() => {}} />);
    wrapper.find(TextField).simulate("change", {
      target: { value: "jojo" },
    });

    const inputValue = wrapper.find(TextField).props().value;

    expect(inputValue).toEqual("jojo");
  });
});
