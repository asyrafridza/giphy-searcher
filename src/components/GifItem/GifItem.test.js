import GifItem from "./GifItem";
import { createShallow } from "@material-ui/core/test-utils";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { CardMedia } from "@material-ui/core";

describe("GifItem component", () => {
  let shallow;

  beforeAll(() => (shallow = createShallow()));

  test("renders", () => {
    const wrapper = shallow(<GifItem gif={{ url: "" }} />);

    const isGifItemExists = wrapper.exists();

    expect(isGifItemExists).toBeTruthy();
  });

  test("renders Favourite icon", () => {
    const wrapper = shallow(<GifItem gif={{ url: "" }} isShowFavIcon={true} />);

    const isFavouriteIconExists = wrapper.find(FavoriteIcon).exists();

    expect(isFavouriteIconExists).toBeTruthy();
  });

  test("hides Favourite icon", () => {
    const wrapper = shallow(<GifItem gif={{ url: "" }} />);

    const isFavouriteIconExists = wrapper.find(FavoriteIcon).exists();

    expect(isFavouriteIconExists).toBeFalsy();
  });

  test("invoke onClick when click a GIF", () => {
    const mockOnClickGIF = jest.fn();
    const wrapper = shallow(
      <GifItem
        gif={{ url: "" }}
        onClickGIF={mockOnClickGIF}
        isShowFavIcon={true}
      />
    );

    wrapper.find(CardMedia).simulate("click");

    expect(mockOnClickGIF).toHaveBeenCalled();
  });
});
