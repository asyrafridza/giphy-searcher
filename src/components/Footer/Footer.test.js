import Footer from "./Footer";
import { createShallow } from "@material-ui/core/test-utils";
import { Typography } from "@material-ui/core";

describe("Footer component", () => {
  let shallow;
  let wrapper;

  beforeAll(() => (shallow = createShallow()));

  beforeEach(() => (wrapper = shallow(<Footer />)));

  test("renders", () => {
    const isFooterExists = wrapper.exists();

    expect(isFooterExists).toBeTruthy();
  });

  test("copyright text is displayed", () => {
    const copyrightText = wrapper.find(Typography).text();

    expect(copyrightText).toEqual("ASYRAF LTD @ 2021");
  });
});
