import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleArticleContainer from "../containers/SingleArticleContainer";
import NavbarContainer from "../containers/NavbarContainer";
import ArticlesByTagContainer from "../containers/ArticlesByTagContainer";
import ArticlesByAuthorContainer from "../containers/ArticlesByAuthorContainer";
import SearchContainer from "../containers/SearchContainer";
import FooterContainer from "../containers/FooterContainer";
import LoginContainer from "../containers/LoginContainer";
import CreateArticleContainer from "../containers/CreateArticleContainer";
import EditArticleContainer from "../containers/EditArticleContainer";
import { useDispatch } from "react-redux";
import { cookieLogger } from "../store/actions/users";
import AdminPanelContainer from "../containers/AdminPanelContainer";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cookieLogger());
  }, []);

  return (
    <div>
      <div>
        <Route path="/" component={NavbarContainer} />
      </div>
      <div>
        <Switch>
          <Route exact path="/articles" component={HomeContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/search/:query" component={SearchContainer} />
          <Route exact path="/tag/:tag" component={ArticlesByTagContainer} />
          <Route
            exact
            path="/admin/create-article"
            component={CreateArticleContainer}
          />
          <Route
            exact
            path="/admin/edit-article/:title"
            component={EditArticleContainer}
          />
          <Route
            exact
            path="/author/:author"
            component={ArticlesByAuthorContainer}
          />

          <Route path="/article/:title" component={SingleArticleContainer} />
          <Route path="/admin/panel" component={AdminPanelContainer} />

          <Redirect to="/articles"></Redirect>
        </Switch>
      </div>
      <div>
        <Route path="/" component={FooterContainer} />
      </div>
    </div>
  );
};

export default Main;
