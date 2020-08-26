import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
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
          <Route exact path="/articles" component={HomeContainer} />
          <Route path="/article/:title" component={SingleArticleContainer} />
          <Redirect to="/articles"></Redirect>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
