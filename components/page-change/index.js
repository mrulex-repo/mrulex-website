import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  wrapperDiv: {
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999"
  },
  title: {
    fontWeight: "500",
    color: "#FFFFFF"
  }
});

const PageChange = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapperDiv}>
        <h4 className={classes.title}>{props.message} {props.path}</h4>
        <CircularProgress />
      </div>
    </div>
  );
}

PageChange.propTypes = {
  message: PropTypes.string.isRequired
}

export default PageChange;
