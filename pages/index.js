import PropTypes from 'prop-types';

import { Button, Grid } from "@material-ui/core";

import { Parallax } from "components";

import { ProductsSection, ServicesSection } from "sections/pages/index";

import { makeStyles } from "@material-ui/core/styles";

import i18n, { withTranslation } from 'i18n';

import styles from "assets/pages/index/style.js";
const createStyleClasses = makeStyles(styles);

const IndexPage = (props) => {
  const classes = createStyleClasses();
  const { t } = props;
  return (
    <div>
      <Parallax filter responsive image={require("assets/pages/index/img/background.jpg")}>
        <div className={classes.container}>
          <Grid container>
            <Grid item className={classes.parallaxGridItem} xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{t("slogan")}</h1>
              <h4>{t("slogan-description")}</h4>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <ServicesSection />
          <ProductsSection />
        </div>
      </div>
    </div>
  );
}

IndexPage.getInitialProps = async ({ req }) => ({
  currentLanguage: req ? req.language : i18n.language,
  namespacesRequired: ["page.index"]
})

IndexPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation(["page.index", "component.footer"])(IndexPage);
