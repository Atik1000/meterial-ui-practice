import React from "react";
import { makeStyles } from "@material-ui/core";

// make style concept

const useStyles = makeStyles({
  SideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "tomato",
  },
});

const SideMenu = () => {
  const classes = useStyles();
  console.log(classes);
  return <div className={classes.SideMenu}></div>;
};

export default SideMenu;
