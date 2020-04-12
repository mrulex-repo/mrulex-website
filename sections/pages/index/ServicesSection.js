import PropTypes from 'prop-types';

import { InfoArea } from "components";

import { Button, Grid } from "@material-ui/core";
import { AccountTree, CloudCircle, DoubleArrow, Keyboard, ViewQuilt } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import i18n, { Link, withTranslation } from 'i18n';

const createStyleClasses = makeStyles({
  description: {
    color: "#999999"
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    color: "#3C4858",
    fontWeight: "700"
  }
});

const ServicesSection = (props) => {
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
              title={t("solution-architecture.title")}
              description={t("solution-architecture.short-description")}
              icon={AccountTree}
              iconColor="#00acc1"
              vertical
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <InfoArea
              title={t("application-design.title")}
              description={t("application-design.short-description")}
              icon={ViewQuilt}
              iconColor="#4caf50"
              vertical
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <InfoArea
              title={t("software-development.title")}
              description={t("software-development.short-description")}
              icon={Keyboard}
              iconColor="#f44336"
              vertical
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <InfoArea
              title={t("digital-transformation.title")}
              description={t("digital-transformation.short-description")}
              icon={CloudCircle}
              iconColor="#9c27b0"
              vertical
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

ServicesSection.getInitialProps = async ({ req }) => ({
  currentLanguage: req ? req.language : i18n.language,
  namespacesRequired: ["services"]
})

ServicesSection.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation("services")(ServicesSection);
