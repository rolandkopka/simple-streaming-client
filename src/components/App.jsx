import React from "react";
import { Router, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

import history from "../history";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router history={history}>
        <Header />
        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/new" component={StreamCreate} />
        <Route exact path="/streams/edit/:id" component={StreamEdit} />
        <Route exact path="/streams/delete/:id" component={StreamDelete} />
        <Route exact path="/streams/show" component={StreamShow} />
      </Router>
    </>
  );
};

export default App;
