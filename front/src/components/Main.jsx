import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleArticleContainer from "../containers/SingleArticleContainer";

const Main = () => {
  return (
    <div>
      <div>{/* <Route path="/" component={NavBarContainer} /> */}</div>
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
