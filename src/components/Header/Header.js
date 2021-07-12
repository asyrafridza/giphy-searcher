import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Header = ({ savedGIFCount = 0, onChangePage }) => {
  const totalSavedGIFs = savedGIFCount ? `(${savedGIFCount})` : "";

  const handlePageChange = (page) => onChangePage(page);

  return (
    <div className="root">
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography data-testid="app-title" variant="h6" className="title">
            GIPHY Searcher
          </Typography>
          <Button
            data-testid="search-nav"
            color="inherit"
            onClick={() => handlePageChange("search")}
          >
            <Typography variant="button">Search</Typography>
          </Button>
          <Button
            data-testid="save-nav"
            color="inherit"
            onClick={() => handlePageChange("saved")}
          >
            <Typography variant="button">Saved {totalSavedGIFs}</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
