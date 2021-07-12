import { Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onChangeSearchBar }) => {
  const [value, setValue] = useState("");

  const handleSearchBarChange = (e) => {
    setValue(e.target.value);
    onChangeSearchBar(e.target.value);
  };

  return (
    <Grid container className="search-bar-container">
      <Grid item xs={12}>
        <TextField
          color="secondary"
          className="search-bar"
          id="filled-search"
          placeholder="Search all GIFs"
          type="search"
          variant="outlined"
          value={value}
          onChange={handleSearchBarChange}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
