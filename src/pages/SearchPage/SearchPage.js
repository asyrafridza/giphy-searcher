import { useState } from "react";
import "./SearchPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import GifList from "../../components/GifList/GifList";

const SearchPage = ({ activePage, savedGIFs, onSaveGIF }) => {
  const [gifName, setGifName] = useState("");
  const handleSearchBarChange = (name) => setGifName(name);
  const handleClickGIF = (gif) => onSaveGIF(gif);

  return (
    <div className="search-page-container">
      <SearchBar onChangeSearchBar={handleSearchBarChange} />
      <GifList
        activePage={activePage}
        searchString={gifName}
        onClickGIF={handleClickGIF}
        savedGIFs={savedGIFs}
      />
    </div>
  );
};

export default SearchPage;
