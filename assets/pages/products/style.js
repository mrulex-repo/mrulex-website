export default {
  backgroundPanel: {
    backgroundImage: "url(" + require("assets/pages/products/img/background.jpg") + ")",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    height: "100%",
    position: "fixed",
    top: 0,
    width: "100%",
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
  },
  container: {
    color: "#FFFFFF",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    zIndex: "12",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  },
  title: {
    color: "#3C4858",
    fontWeight: "700",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  description: {
    color: "#999999"
  },
  section: {
    padding: "50px 0 70px 0",
    textAlign: "center"
  },
  main: {
    background: "#FFFFFF",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    margin: "60px 30px 0px",
    position: "relative",
    zIndex: "3"
  },
  titleWithHandPointer: {
    color: "#3C4858",
    cursor: "pointer",
    fontWeight: "700",
    padding: "20px 10px 10px 10px",
    textDecoration: "none"
  },
  cardContainer: {
    display: "inline-block",
    textAlign: "left",
    width: "100%"
  },
  leftCardContainer: {
    float: "left",
    width: "50%"
  },
  rightCardContainer: {
    float: "right",
    width: "50%"
  }
};
