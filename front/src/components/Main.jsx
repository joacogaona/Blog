import React from "react";
import { Switch, Route } from "react-router-dom";
import SingleArticleContainer from "../containers/SingleArticleContainer";
import NavbarContainer from "../containers/NavbarContainer";

const Main = () => {
  return (
    <div>
      <div>
        <Route path="/" component={NavbarContainer} />
      </div>
      <div>
        <Switch>
          <Route path="/article/:title" component={SingleArticleContainer} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
