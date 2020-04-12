import PropTypes from "prop-types";

import { Button, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, withTranslation } from 'i18n';

const createStyleClasses = makeStyles({
  action: {
    color: "inherit",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    margin: "0",
    float: "right!important"
  },
  footer: {
    textAlign: "center",
    position: "relative"
  },
  container: {
    padding: "0 10% 0 10%",
    margin: "0",
    width: "100%"
  },
  list: {
    margin: "0",
    padding: "0"
  },
  listItem: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
});

const Footer = (props) => {
  const classes = createStyleClasses();
  const { t } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {/*
            <ListItem className={classes.listItem}>
              <Link href="/about-us" as="/about-us">
                <Button className={classes.action}>{t("about-us")}</Button>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="/contact-us" as="/contact-us">
                <Button className={classes.action}>{t("contact-us")}</Button>
              </Link>
            </ListItem>
            */}
            <ListItem className={classes.listItem}>
              <a className={classes.action} href="mailto:info@mrulex.com">{t("contact-us")}</a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} mrulex
        </div>
      </div>
    </footer>
  );
}

Footer.getInitialProps = async ({ req }) => ({
  currentLanguage: req ? req.language : i18n.language,
  namespacesRequired: ["component.footer"]
})

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation("component.footer")(Footer);
