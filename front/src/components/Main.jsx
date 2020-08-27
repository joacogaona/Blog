import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleArticleContainer from "../containers/SingleArticleContainer";
import NavbarContainer from "../containers/NavbarContainer";
import ArticlesByTagContainer from "../containers/ArticlesByTagContainer";
import ArticlesByAuthorContainer from "../containers/ArticlesByAuthorContainer";
import SearchContainer from "../containers/SearchContainer";

const Main = () => {
  return (
    <div>
      <div>
        <Route path="/" component={NavbarContainer} />
      </div>
      <div>
        <Switch>
          <Route exact path="/articles" component={HomeContainer} />
          <Route exact path="/search/:query" component={SearchContainer} />
          <Route exact path="/tag/:tag" component={ArticlesByTagContainer} />
          <Route
            exact
            path="/author/:author"
            component={ArticlesByAuthorContainer}
          />

          <Route path="/article/:title" component={SingleArticleContainer} />
          <Redirect to="/articles"></Redirect>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
