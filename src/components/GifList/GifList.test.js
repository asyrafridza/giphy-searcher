import GifList from "./GifList";
import { createShallow } from "@material-ui/core/test-utils";

describe("GifList component", () => {
  let shallow;

  beforeAll(() => (shallow = createShallow()));

  test("renders", () => {
    const wrapper = shallow(<GifList gif={{ url: "" }} />);

    const isGifListExists = wrapper.exists();

    expect(isGifListExists).toBeTruthy();
  });
});
