import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";

import { Fragment } from "react";

import { Router, appWithTranslation, i18n } from 'i18n';

import { Footer, Header, HeaderHome, HeaderMenu, PageChange } from "components";

import "assets/scss/styles.scss";

Router.events.on("routeChangeStart", url => {
  document.getElementById("page-transition").classList.add("body-page-transition");
  ReactDOM.render(<PageChange path={url} message={i18n.t("message.loading-page")} />,
    document.getElementById("page-transition"));
});

Router.events.on("routeChangeComplete", () => {
  document.getElementById("page-transition").classList.remove("body-page-transition");
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
});

Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.getElementById("page-transition").classList.remove("body-page-transition");
});

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, t } = this.props;

    return (
      <Fragment>
        <Head><title>mrulex</title></Head>
        <Header home={<HeaderHome />} /* menu={<HeaderMenu />} */ />
        <Component {...pageProps} />
        <Footer />
      </Fragment>
    );
  }
}

export default appWithTranslation(MyApp)
