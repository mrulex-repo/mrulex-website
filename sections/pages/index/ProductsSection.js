import PropTypes from 'prop-types';

import { InfoArea } from "components";

import { Button, Grid } from "@material-ui/core";

import { DoubleArrow, Fingerprint, People, Security, Send } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import i18n, { Link, withTranslation } from 'i18n';

const createStyleClasses = makeStyles({
  description: {
    color: "#999999"
  },
  section: {
    padding: "0 0 70px 0",
    textAlign: "center"
  },
  title: {
    color: "#3C4858",
    fontWeight: "700"
  }
});

const ProductsSection = (props) => {
  const classes = createStyleClasses();
  const { t } = props;
  return (
    <div className={classes.section}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={8}>
          <h2 className={classes.title}>{t("title")}</h2>
          <h5 className={classes.description}>{t("description")}</h5>
        </Grid>
      </Grid>
      <div>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <InfoArea
              title={t("authorization-service.title")}
              description={t("authorization-service.short-description")}
              icon={Security}
              iconColor="#000000"
              vertical
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <InfoArea
              title={t("identity-service.title")}
              description={t("identity-service.short-description")}
              icon={Fingerprint}
              iconColor="#838285"
              vertical
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <InfoArea
              title={t("notification-service.title")}
              description={t("notification-service.short-description")}
              icon={Send}
              iconColor="#4005b3"
              vertical
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <InfoArea
              title={t("users-service.title")}
              description={t("users-service.short-description")}
              icon={People}
              iconColor="#4fad32"
              vertical
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

ProductsSection.getInitialProps = async ({ req }) => ({
  currentLanguage: req ? req.language : i18n.language,
  namespacesRequired: ["products"]
})

ProductsSection.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation("products")(ProductsSection);
