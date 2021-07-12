import { createShallow } from "@material-ui/core/test-utils";
import MainPage from "./MainPage";
import SearchPage from "../SearchPage/SearchPage";
import FavouritePage from "../FavouritePage/FavouritePage";

describe("MainPage", () => {
  let shallow;

  beforeAll(() => (shallow = createShallow()));

  test("renders", () => {
    const wrapper = shallow(<MainPage />);

    const isMainPageExists = wrapper.exists();

    expect(isMainPageExists).toBeTruthy();
  });
});
