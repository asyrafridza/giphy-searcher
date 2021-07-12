import FavouritePage from "./FavouritePage";
import { createShallow } from "@material-ui/core/test-utils";
import GifList from "../../components/GifList/GifList";

describe("FavouritePage", () => {
  let shallow;

  beforeAll(() => (shallow = createShallow()));

  test("renders", () => {
    const wrapper = shallow(<FavouritePage />);

    const isFavouritePageExists = wrapper.exists();

    expect(isFavouritePageExists).toBeTruthy();
  });

  test("renders SearchBar component", () => {
    const wrapper = shallow(<FavouritePage />);

    const isGifListExists = wrapper.find(GifList).exists();

    expect(isGifListExists).toBeTruthy();
  });
});
