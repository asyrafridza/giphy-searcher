import { Typography } from "@material-ui/core";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import "./Title.css";

const Title = ({ name, hasTrendingIcon = false }) => {
  return (
    <Typography variant="h5">
      {hasTrendingIcon && (
        <TrendingUpIcon
          color="secondary"
          fontSize="large"
          className="icon-trending"
        />
      )}
      {name}
    </Typography>
  );
};

export default Title;
