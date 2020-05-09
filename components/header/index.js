import PropTypes from "prop-types";
import React from "react";

import Menu from "@material-ui/icons/Menu";

import { AppBar, Button, Drawer, Hidden, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles.js";

const createStyleClasses = makeStyles(styles);

const Header = (props) => {
  const classes = createStyleClasses();

  const headerColorChange = () => {
    if (window.pageYOffset > props.headerColorChangePosition) {
      document.body.getElementsByTagName("header")[0].classList.add(classes.appBarOnScroll);
    }
    else {
      document.body.getElementsByTagName("header")[0].classList.remove(classes.appBarOnScroll);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", headerColorChange);
    return function cleanup() {
      window.removeEventListener("scroll", headerColorChange);
    };
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const { menu, home } = props;

  let menuButton = null;
  if (menu) {
    menuButton = (
        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
          <Menu />
        </IconButton>
    );
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {home ? home : <div></div>}
        <Hidden xsDown implementation="css">{menu}</Hidden>
        <Hidden smUp>
          {menuButton ? menuButton : <div></div>}
        </Hidden>
      </Toolbar>
      <Hidden smUp implementation="js">
        <Drawer variant="temporary" anchor={"right"} open={mobileOpen}
          classes={{ paper: classes.drawerPaper }} onClose={handleDrawerToggle}>
          {menu}
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.getInitialProps = async () => ({
  headerColorChangePosition: 50
});

Header.propTypes = {
  home: PropTypes.node,
  menu: PropTypes.node,
  headerColorChangePosition: PropTypes.number
};

export default Header;
