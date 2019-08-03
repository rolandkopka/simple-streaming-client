import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

import { Container, CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/delete/:id" component={StreamDelete} />
          <Route exact path="/streams/:id" component={StreamShow} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
