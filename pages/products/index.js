import classNames from "classnames";
import PropTypes from 'prop-types';

import { Button, Grid } from "@material-ui/core";

import { InfoArea, Parallax } from "components";

import { DoubleArrow, Fingerprint, People, Security, Send } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import i18n, { withTranslation, Link } from 'i18n';

import styles from "assets/pages/products/style.js";
const createStyleClasses = makeStyles(styles);

const ProductsPage = (props) => {
  const classes = createStyleClasses();
  const { t } = props;
  return (
    <div>
      <div className={classes.backgroundPanel}></div>
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.section}>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={8}>
                <h2 className={classes.title}>{t("title")}</h2>
                <h5 className={classes.description}>{t("description")}</h5>
              </Grid>
            </Grid>
            <div>
              <div className={classes.cardContainer}>
                <div className={classes.leftCardContainer}>
                  <a name="authorization-service"></a>
                  <InfoArea
                    title={t("authorization-service.title")}
                    description={t("authorization-service.short-description")}
                    icon={Security}
                    iconColor="#000000"
                  />
                </div>
              </div>
              <div className={classes.cardContainer}>
                <div className={classes.rightCardContainer}>
                    <a name="identity-service"></a>
                    <InfoArea
                      title={t("identity-service.title")}
                      description={t("identity-service.short-description")}
                      icon={Fingerprint}
                      iconColor="#838285"
                    />
                </div>
              </div>
              <div className={classes.cardContainer}>
                <div className={classes.leftCardContainer}>
                  <a name="notification-service"></a>
                  <InfoArea
                    title={t("notification-service.title")}
                    description={t("notification-service.short-description")}
                    icon={Send}
                    iconColor="#4005b3"
                  />
                </div>
              </div>
              <div className={classes.cardContainer}>
                <div className={classes.rightCardContainer}>
                  <a name="users-service"></a>
                  <InfoArea
                    title={t("users-service.title")}
                    description={t("users-service.short-description")}
                    icon={People}
                    iconColor="#4fad32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductsPage.getInitialProps = async ({ req }) => ({
  currentLanguage: req ? req.language : i18n.language,
  namespacesRequired: ["products"]
})

ProductsPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation(["products", "component.footer"])(ProductsPage);
