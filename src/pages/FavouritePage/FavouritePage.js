import GifList from "../../components/GifList/GifList";

const FavouritePage = ({ activePage, savedGIFs, onUnsaveGIF }) => {
  const handleUnsaveGIF = (gif) => onUnsaveGIF(gif);

  return (
    <GifList
      activePage={activePage}
      savedGIFs={savedGIFs}
      onClickGIF={handleUnsaveGIF}
    />
  );
};

export default FavouritePage;
