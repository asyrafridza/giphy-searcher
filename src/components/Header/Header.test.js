import Header from "./Header";
import { createShallow } from "@material-ui/core/test-utils";
import { Typography } from "@material-ui/core";

describe("Header component", () => {
  let shallow;

  beforeAll(() => (shallow = createShallow()));

  test("renders", () => {
    const wrapper = shallow(<Header />);

    const isHeaderExists = wrapper.exists();

    expect(isHeaderExists).toBeTruthy();
  });

  test("updates saved GIFs count", () => {
    const wrapper = shallow(<Header savedGIFCount="777" />);

    const savedGIFText = wrapper.find(Typography).at(2).text();

    expect(savedGIFText).toBe("Saved (777)");
  });

  test("hides GIFs count if prop is not passed", () => {
    const wrapper = shallow(<Header />);

    const savedGIFText = wrapper.find(Typography).at(2).text();

    expect(savedGIFText).toBe("Saved ");
  });
});
