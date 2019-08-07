import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import Posts from "./Posts";
import Post from "./Post";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Router>
        {/* the line below will return the list of posts   */}
        <Posts path="/" />
        {/* //the line below will return one post */}
        <Post path="/post/:id" />
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

render(<App />, document.getElementById("root"));
