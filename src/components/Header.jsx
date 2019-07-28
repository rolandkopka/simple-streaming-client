import React from "react";
import { AppBar, Button, Toolbar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

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
            Streamy
          </Link>
          <Button to="/" component={RouterLink} className={classes.login}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    color: "inherit"
  },
  login: {
    color: "inherit"
  }
}));

export default Header;
