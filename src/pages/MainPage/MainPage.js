import { useState } from "react";
import Default from "../../layouts/Default/Default";
import FavouritePage from "../FavouritePage/FavouritePage";
import SearchPage from "../SearchPage/SearchPage";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "#121212",
    },
  },
});

const MainPage = () => {
  const [savedGIFs, setSavedGIFs] = useState([]);
  const [pageName, setPageName] = useState("search");

  // To save and unsave GIF
  const handleSavedGIF = (gif) => {
    const existingGIF = savedGIFs.find((savedGIF) => savedGIF.id === gif.id);
    if (existingGIF) {
      // Unsave GIF if already saved
      const updatedGIFs = savedGIFs.filter(
        (savedGIF) => savedGIF.id !== existingGIF.id
      );
      setSavedGIFs([...updatedGIFs]);
      return;
    }
    // Save new GIF
    setSavedGIFs([...savedGIFs, gif]);
  };

  const handlePageChange = (activePage) => setPageName(activePage);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Default savedGIFCount={savedGIFs.length} onChangePage={handlePageChange}>
        {pageName === "search" ? (
          <SearchPage
            activePage={pageName}
            savedGIFs={savedGIFs}
            onSaveGIF={handleSavedGIF}
          />
        ) : (
          <FavouritePage
            activePage={pageName}
            savedGIFs={savedGIFs}
            onUnsaveGIF={handleSavedGIF}
          />
        )}
      </Default>
    </ThemeProvider>
  );
};

export default MainPage;
