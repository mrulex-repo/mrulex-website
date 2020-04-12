import classNames from "classnames";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const createStyleClasses = makeStyles({
  description: {
    color: "#999999",
    fontSize: "14px",
    overflow: "hidden",
    padding: "10px"
  },
  icon: {
    height: "64px",
    width: "64px"
  },
  iconWrapper: {
    float: "left",
    marginRight: "10px",
    marginTop: "24px"
  },
  iconWrapperVertical: {
    float: "none"
  },
  info: {
    color: "#999999",
    overflow: "hidden"
  },
  infoArea: {
    maxWidth: "360px",
    padding: "10px"
  },
  title: {
    color: "#3C4858",
    fontWeight: "700",
    margin: "0",
    padding: "20px 10px",
    textTransform: "capitalize"
  }
});

const InfoArea = (props) => {
  const classes = createStyleClasses();
  const { title, description, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes.iconWrapperVertical]: vertical
  });

  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={classes.icon} style={{color: iconColor}} />
      </div>
      <div className={classes.info}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  iconColor: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};

export default InfoArea;
