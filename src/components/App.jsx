import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      <Link to="/">Navigate to Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
