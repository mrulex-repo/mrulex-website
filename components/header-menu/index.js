import classNames from "classnames";
import PropTypes from 'prop-types';

import { Button, ClickAwayListener, Divider, Grow, Icon, List, ListItem,
  MenuItem, MenuList, Paper, Popper } from "@material-ui/core";

import { AccountTree, Apps, BusinessCenter, CloudCircle, Code, DoubleArrow,
  Fingerprint, Keyboard, People, Security, Send, ViewQuilt } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import { Link, withTranslation } from 'i18n';

const createStyleClasses = makeStyles({
  menu: {
    padding: "0 15px 0 0"
  },
  menuItem: {
    color: "inherit",
    display: "block",
    float: "left",
    margin: "0",
    padding: "0",
    position: "relative",
    width: "auto"
  },
  menuAction: {
    borderRadius: "3px",
    color: "inherit",
    display: "inline-flex",
    fontSize: "12px",
    fontWeight: "500",
    justifyContent: "flex-start",
    lineHeight: "20px",
    margin: 0,
    minWidth: "150px",
    padding: "15px",
    position: "relative",
    textAlign: "left",
    textTransform: "uppercase",
    width: "100%"
  },
  icons: {
    height: "20px",
    marginRight: "3px",
    width: "20px"
  },
  submenuContainer: {
    zIndex: "1600"
  },
  submenuContainerPaper: {
    backgroundClip: "padding-box",
    backgroundColor: "#fff",
    border: "0",
    borderRadius: "3px",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.50)",
    fontSize: "14px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    textAlign: "left",
    zIndex: "1000"
  },
  submenu: {
    padding: 0
  },
  submenuItem: {
    borderRadius: "2px",
    clear: "both",
    color: "#333333",
    display: "block",
    fontWeight: "400",
    margin: 0,
    padding: 0,
    position: "relative",
    textAlign: "left",
    transition: "all 3s linear"
  },
  submenuDividerItem: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    height: "1px",
    margin: 0
  }
});

const HeaderMenu = (props) => {
  const classes = createStyleClasses();

  const [menuProductsOpen, setMenuProductsOpen] = React.useState(false);
  const menuProductsAnchorRef = React.useRef(null);
  const handleMenuProductsToggle = () => setMenuProductsOpen(!menuProductsOpen);
  const handleMenuProductsOnClose = () => setMenuProductsOpen(false);
  const menuProductsCaretClasses = classNames({"fa": true, "fa-caret-up": menuProductsOpen, "fa-caret-down": !menuProductsOpen});

  const [menuServicesOpen, setMenuServicesOpen] = React.useState(false);
  const menuServicesAnchorRef = React.useRef(null);
  const handleMenuServicesToggle = () => setMenuServicesOpen(!menuServicesOpen);
  const handleMenuServicesOnClose = () => setMenuServicesOpen(false);
  const menuServicesCaretClasses = classNames({"fa": true, "fa-caret-up": menuServicesOpen, "fa-caret-down": !menuServicesOpen});

  const [menuProjectsOpen, setMenuProjectsOpen] = React.useState(false);
  const menuProjectsAnchorRef = React.useRef(null);
  const handleMenuProjectsToggle = () => setMenuProjectsOpen(!menuProjectsOpen);
  const handleMenuProjectsOnClose = () => setMenuProjectsOpen(false);
  const menuProjectsCaretClasses = classNames({"fa": true, "fa-caret-up": menuProjectsOpen, "fa-caret-down": !menuProjectsOpen});

  const { t } = props;
  return (
    <List className={classes.menu}>
      <ListItem className={classes.menuItem}>
        <Button className={classes.menuAction} ref={menuProductsAnchorRef} onClick={handleMenuProductsToggle}
          startIcon={<Apps />} endIcon={<Icon className={menuProductsCaretClasses} />}>
          {t("products")}
        </Button>
        <Popper open={menuProductsOpen} anchorEl={menuProductsAnchorRef.current} placement="bottom-start"
          className={classes.submenuContainer}>
          <Grow in={menuProductsOpen}>
            <Paper className={classes.submenuContainerPaper}>
              <ClickAwayListener onClickAway={handleMenuProductsOnClose}>
                <MenuList role="menu" className={classes.submenu}>
                  <MenuItem  className={classes.submenuItem}>
                    <Link href="/products#authorization-service" as="/products/authorization-service">
                      <Button className={classes.menuAction} startIcon={<Security className={classes.icons} />}>
                        {t("products-authorization-service")}
                      </Button>
                    </Link>
                  </MenuItem>
                  <Divider className={classes.submenuDividerItem} />
                  <MenuItem  className={classes.submenuItem}>
                    <Link href="/products#users-service" as="/products/users-service">
                      <Button className={classes.menuAction} startIcon={<People className={classes.icons} />}>
                        {t("products-users-service")}
                      </Button>
                    </Link>
                  </MenuItem>
                  <Divider className={classes.submenuDividerItem} />
                  <MenuItem  className={classes.submenuItem}>
                    <Link href="/products#identity-service" as="/products/identity-service">
                      <Button className={classes.menuAction} startIcon={<Fingerprint className={classes.icons} />}>
                        {t("products-identity-service")}
                      </Button>
                    </Link>
                  </MenuItem>
                  <Divider className={classes.submenuDividerItem} />
                  <MenuItem  className={classes.submenuItem}>
                    <Link href="/products#notification-service" as="/products/notification-service">
                      <Button className={classes.menuAction} startIcon={<Send className={classes.icons} />}>
                        {t("products-notification-service")}
                      </Button>
                    </Link>
                  </MenuItem>
                  <Divider className={classes.submenuDividerItem} />
                  <MenuItem  className={classes.submenuItem}>
                    <Link href="/products" as="/products">
                      <Button className={classes.menuAction} endIcon={<DoubleArrow className={classes.icons} />}>
                        {t("more")}
                      </Button>
                    </Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        </Popper>
      </ListItem>
      <ListItem className={classes.menuItem}>
        <Button className={classes.menuAction} ref={menuServicesAnchorRef} onClick={handleMenuServicesToggle}
          startIcon={<BusinessCenter />} endIcon={<Icon className={menuServicesCaretClasses} />}>
          {t("services")}
        </Button>
        <Popper open={menuServicesOpen} anchorEl={menuServicesAnchorRef.current} placement="bottom-start"
          className={classes.submenuContainer}>
          <Grow in={menuServicesOpen}>
            <Paper className={classes.submenuContainerPaper}>
              <ClickAwayListener onClickAway={handleMenuServicesOnClose}>
                <MenuList role="menu" className={classes.submenu}>
                  <MenuItem className={classes.submenuItem}>
                    <Link href="/services#solution-architecture" as="/services/solution-architecture">
                      <Button className={classes.menuAction} startIcon={<AccountTree className={classes.icons} />}>
                        {t("services-solution-architecture")}
                      </Button>
                    </Link>
                  </MenuItem>
                  <Divider className={classes.submenuDividerItem} />
                  <MenuItem className={classes.submenuItem}>
                    <Link href="/services#application-design" as="/services/application-design">
                      <Button className={classes.menuAction} startIcon={<ViewQuilt className={classes.icons} />}>
                        {t("services-application-design")}
                      </Button>
                    </Link>
                  </MenuItem>
                  <Divider className={classes.submenuDividerItem} />
                  <MenuItem className={classes.submenuItem}>
                    <Link href="/services#software-development" as="/services/software-development">
                      <Button className={classes.menuAction} startIcon={<Keyboard className={classes.icons} />}>
                        {t("services-software-development")}
                      </Button>
                    </Link>
                  </MenuItem>
                  <Divider className={classes.submenuDividerItem} />
                  <MenuItem className={classes.submenuItem}>
                    <Link href="/services#digital-transformation" as="/services/digital-transformation">
                      <Button className={classes.menuAction} startIcon={<CloudCircle className={classes.icons} />}>
                        {t("services-digital-transformation")}
                      </Button>
                    </Link>
                  </MenuItem>
                  <Divider className={classes.submenuDividerItem} />
                  <MenuItem  className={classes.submenuItem}>
                    <Link href="/services" as="/services">
                      <Button className={classes.menuAction} endIcon={<DoubleArrow className={classes.icons} />}>
                        {t("more")}
                      </Button>
                    </Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        </Popper>
      </ListItem>
      {/*
      <ListItem className={classes.menuItem}>
        <Button className={classes.menuAction} ref={menuProjectsAnchorRef} onClick={handleMenuProjectsToggle}
          startIcon={<Code />} endIcon={<Icon className={menuProjectsCaretClasses} />}>
          {t("projects")}
        </Button>
        <Popper open={menuProjectsOpen} anchorEl={menuProjectsAnchorRef.current} placement="bottom-start"
          className={classes.submenuContainer}>
          <Grow in={menuProjectsOpen}>
            <Paper className={classes.submenuContainerPaper}>
              <ClickAwayListener onClickAway={handleMenuProjectsOnClose}>
                <MenuList role="menu" className={classes.submenu}>
                  <MenuItem className={classes.submenuItem}>
                    <Link href="/services/solution-architecture" as="/services/solution-architecture">
                      <Button className={classes.menuAction} startIcon={<AccountTree className={classes.icons} />}>
                        {t("services-solution-architecture")}
                      </Button>
                    </Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        </Popper>
      </ListItem>
      */}
    </List>
  );
}

HeaderMenu.getInitialProps = async ({ req }) => ({
  currentLanguage: req ? req.language : i18n.language,
  namespacesRequired: ["component.header-menu"]
})

HeaderMenu.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation("component.header-menu")(HeaderMenu);
