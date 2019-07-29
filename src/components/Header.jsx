import React from "react";
import { AppBar, Toolbar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            component={RouterLink}
            variant="h6"
            underline="none"
            className={classes.title}
          >
            {"Streamy"}
          </Link>
          <GoogleAuth />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    color: "inherit"
  }
}));

export default Header;
