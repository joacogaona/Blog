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
          <Route path="/home" component={HomeContainer} />

          <Route path="/article/:title" component={SingleArticleContainer} />
          <Redirect to="/home"></Redirect>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
