import { useEffect, useRef, useState } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import "./GifList.css";
import { searchGIF, getTrendingGIF } from "../../api/giphy";
import GifItem from "../GifItem/GifItem";
import Title from "../Title/Title";

const GifList = ({ searchString, savedGIFs, onClickGIF, activePage }) => {
  const [gifs, setGifs] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const skipFetchAPIRef = useRef(false);
  const animatedLoadingContainer = Array(12).fill("");

  // Call API to get more results
  const getMoreResults = async () => {
    const currentPage = gifs.length + 1;
    if (currentPage > totalPages) return;

    const json = await searchGIF(searchString, currentPage);
    const results = json.data.map((result) => ({
      id: result.id,
      url: result.images.fixed_height.url,
    }));
    // Remove duplicate GIFs
    let updatedGIFs = [...gifs, ...results];
    updatedGIFs = [
      ...new Map(updatedGIFs.map((gif) => [gif.id, gif])).values(),
    ];
    setGifs([...updatedGIFs]);
  };

  const handleClickGIF = (gif) => {
    skipFetchAPIRef.current = true;
    onClickGIF(gif);
  };

  const isGIFSaved = (id) => savedGIFs.some((savedGIF) => savedGIF.id === id);
  let title = "";
  // Change title based on current page and status
  if (activePage === "search" && gifs.length && searchString) {
    const gifFoundTitle = `${totalPages} matching results`;
    title = <Title name={gifFoundTitle} />;
  } else if (activePage === "search" && !gifs.length && searchString) {
    const gifNotFoundTitle = `No GIFs found for ${searchString}`;
    title = <Title name={gifNotFoundTitle} />;
  } else if (activePage === "search" && gifs.length && !searchString) {
    title = <Title name="Trending" hasTrendingIcon="true" />;
  } else if (activePage === "saved" && !savedGIFs.length) {
    title = <Title name="No Saved GIFs" />;
  } else if (activePage === "saved" && savedGIFs.length) {
    const gifNotFoundTitle = `${savedGIFs.length} Saved GIF(s)`;
    title = <Title name={gifNotFoundTitle} />;
  } else {
    title = <Title name="Oops something went wrong" />;
  }

  useEffect(() => {
    // Display saved GIFs if active page is Saved Page
    if (activePage === "saved") {
      setGifs(...[savedGIFs]);
      return;
    }

    // Prevent from calling API when re-rendering the component
    if (skipFetchAPIRef.current) {
      skipFetchAPIRef.current = false;
      return;
    }

    // Fetch Trending GIFs as default if search bar is empty
    (async () => {
      // To prevent from fetching Trending API when search string is available or onclick GIF
      if (searchString) return;

      const json = await getTrendingGIF();
      // Handle if API has error
      if (json.status === "error") {
        setGifs([]);
        return;
      }

      const results = json.data.map((result) => ({
        id: result.id,
        url: result.images.fixed_height.url,
      }));
      setGifs([...results]);
    })();

    // Call Search GIF API once user has stopped typing
    const timeoutId = setTimeout(() => {
      (async () => {
        if (!searchString) return;

        const json = await searchGIF(searchString);

        // Handle if API has error
        if (json.status === "error") {
          setGifs([]);
          return;
        }

        let results = json.data.map((result) => ({
          id: result.id,
          url: result.images.fixed_height.url,
        }));
        // Remove duplicate GIFs
        results = [
          ...new Map(results.map((result) => [result.id, result])).values(),
        ];
        setGifs([...results]);
        setTotalPages(json?.pagination?.total_count || 0);
      })();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchString, savedGIFs, activePage]);

  return (
    <div>
      <Box component="span" px={1}>
        {title}
      </Box>
      <Grid container spacing={2} className="grid-container">
        {gifs.length
          ? gifs.map((gif) => (
              <Grid key={gif.id} item xs={12} sm={6} md={3}>
                <GifItem
                  gif={
                    gif ||
                    "https://media1.giphy.com/media/KVVQ9vB3dSbZLYMf9n/200.gif?cid=0318c9c7ca6o2658nye5zdjkcigyv0xqedle13y4x203s1xs&rid=200.gif&ct=g"
                  }
                  onClickGIF={handleClickGIF}
                  isGIFSaved={isGIFSaved(gif.id)}
                  isShowFavIcon={true}
                />
              </Grid>
            ))
          : animatedLoadingContainer.map((_row, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <GifItem
                  gif={{
                    url: "https://media1.giphy.com/media/XuBNdP9Pb7W9i/200.gif?cid=0318c9c7po2s4rb91fni3jwej47y7gw8lrz09ovzymrcj20c&rid=200.gif&ct=g",
                  }}
                  isGIFSaved={false}
                  isShowFavIcon={false}
                />
              </Grid>
            ))}
        {searchString && gifs.length + 1 < totalPages && (
          <Grid item xs={12}>
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              onClick={getMoreResults}
            >
              See More
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default GifList;
