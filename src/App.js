import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import Posts from "./Posts";
import Post from "./Post";

const App = () => {
  return (
    <div>
      <Router>
        <Posts path="/" />
        <Post path="/post/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
