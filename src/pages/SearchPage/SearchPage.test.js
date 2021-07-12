import SearchPage from "./SearchPage";
import { createShallow } from "@material-ui/core/test-utils";
import SearchBar from "../../components/SearchBar/SearchBar";
import GifList from "../../components/GifList/GifList";

describe("SearchPage", () => {
  let shallow;

  beforeAll(() => (shallow = createShallow()));

  test("renders", () => {
    const wrapper = shallow(<SearchPage />);

    const isSearchPageExists = wrapper.exists();

    expect(isSearchPageExists).toBeTruthy();
  });

  test("renders SearchBar component", () => {
    const wrapper = shallow(<SearchPage />);

    const isSearchBarExists = wrapper.find(SearchBar).exists();

    expect(isSearchBarExists).toBeTruthy();
  });

  test("renders GifList component", () => {
    const wrapper = shallow(<SearchPage />);

    const isGifListExists = wrapper.find(GifList).exists();

    expect(isGifListExists).toBeTruthy();
  });
});
