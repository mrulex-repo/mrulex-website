import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const createStyleClasses = makeStyles({
  parallax: {
    alignItems: "center",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    border: "0",
    display: "flex",
    height: "90vh",
    margin: "0",
    maxHeight: "1000px",
    minHeight: "660px",
    overflow: "hidden",
    padding: "0",
    position: "relative",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
      content: "''",
      display: "block",
      height: "100%",
      left: "0",
      position: "absolute",
      top: "0",
      width: "100%",
      zIndex: "1"
    }
  }
});

const Parallax = (props) => {
  const resetTransform = () => {
    let windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const [transform, setTransform] = React.useState("translate3d(0,0px,0)");
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const { children, image } = props;

  const classes = createStyleClasses();

  return (
    <div className={classes.parallax} style={{ backgroundImage: "url(" + image + ")",
      transform: transform }}>
      {children}
    </div>
  );
}

Parallax.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string
};

export default Parallax;
