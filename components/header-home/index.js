import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import { Link, withTranslation } from 'i18n';

const createStyleClasses = makeStyles({
  title: {
    color: "inherit",
    fontSize: "24px",
    letterSpacing: "unset",
    padding: "8px 16px",
    textTransform: "none",
    "&:hover,&:focus": {
      background: "transparent",
      color: "inherit"
    }
  }
});

const HeaderHome = (props) => {
  const classes = createStyleClasses();
  const { t } = props;

  return (
    <Link href="/" as="/">
      <Button className={classes.title}>{t('brand')}</Button>
    </Link>
  );
}

HeaderHome.getInitialProps = async () => ({
  namespacesRequired: ["component.header"]
});

HeaderHome.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("component.header")(HeaderHome);
