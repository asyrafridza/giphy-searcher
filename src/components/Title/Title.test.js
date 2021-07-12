import Title from "./Title";
import { createShallow } from "@material-ui/core/test-utils";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

describe("Title component", () => {
  let shallow;

  beforeAll(() => (shallow = createShallow()));

  test("renders", () => {
    const wrapper = shallow(<Title />);

    const isTitleExists = wrapper.exists();

    expect(isTitleExists).toBeTruthy();
  });

  test("renders Trending icon", () => {
    const wrapper = shallow(<Title hasTrendingIcon={true} />);

    const isTrendingIconExists = wrapper.find(TrendingUpIcon).exists();

    expect(isTrendingIconExists).toBeTruthy();
  });

  test("hides Trending icon", () => {
    const wrapper = shallow(<Title />);

    const isTrendingIconExists = wrapper.find(TrendingUpIcon).exists();

    expect(isTrendingIconExists).toBeFalsy();
  });
});
