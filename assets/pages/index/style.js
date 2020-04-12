export default {
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
  parallaxGridItem: {
    position: "relative",
    width: "100%",
    padding: "0 15px 0 15px",
    flexBasis: "auto"
  },
  title: {
    fontWeight: "700",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    margin: "-60px 30px 0px",
    position: "relative",
    zIndex: "3"
  },
  mainButton: {
    backgroundColor: "#f44336",
    border: "none",
    borderRadius: "3px",
    color: "#FFFFFF",
    cursor: "pointer",
    padding: "12px 30px",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: "#f44336"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "0",
      fontSize: "14px",
      marginRight: "4px",
    },
  }
};
