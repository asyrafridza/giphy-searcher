import Default from "./Default";
import { createShallow } from "@material-ui/core/test-utils";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

describe("Default component", () => {
  let shallow;

  beforeAll(() => (shallow = createShallow()));

  test("renders", () => {
    const wrapper = shallow(<Default gif={{ url: "" }} />);

    const isDefaultExists = wrapper.exists();

    expect(isDefaultExists).toBeTruthy();
  });

  test("renders Header component", () => {
    const wrapper = shallow(<Default />);

    const isHeaderExists = wrapper.find(Header).exists();

    expect(isHeaderExists).toBeTruthy();
  });

  test("renders Footer component", () => {
    const wrapper = shallow(<Default />);

    const isFooterExists = wrapper.find(Footer).exists();

    expect(isFooterExists).toBeTruthy();
  });

  test("renders main section", () => {
    const wrapper = shallow(<Default />);

    const isMainSectionExists = wrapper.find(".main").exists();

    expect(isMainSectionExists).toBeTruthy();
  });
});
