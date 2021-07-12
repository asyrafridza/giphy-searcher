import "./GifItem.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";

const GifItem = ({ gif, onClickGIF, isGIFSaved = false, isShowFavIcon = false }) => {
  const handleClickGIF = (gif) => isShowFavIcon && onClickGIF(gif);

  return (
    <Card raised>
      <CardActionArea>
        <CardMedia
          className="media"
          image={gif.url}
          onClick={() => handleClickGIF(gif)}
        />
        {isShowFavIcon && (
          <FavoriteIcon
            className={
              isGIFSaved
                ? "icon-favourite icon-favourite-active"
                : "icon-favourite"
            }
            color="secondary"
          />
        )}
      </CardActionArea>
    </Card>
  );
};

export default GifItem;
