import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeContainer from "../screens/home/HomeContainer";
import SingleArticleContainer from "../screens/singleArticle/SingleArticleContainer";
import NavbarContainer from "../screens/navbar/NavbarContainer";
import ArticlesByTagContainer from "../screens/articlesByTag/ArticlesByTagContainer";
import ArticlesByAuthorContainer from "../screens/articlesByAuthor/ArticlesByAuthorContainer";
import SearchContainer from "../screens/search/SearchContainer";
import FooterContainer from "../screens/footer/FooterContainer";
import LoginContainer from "../screens/login/LoginContainer";
import CreateArticleContainer from "../screens/createArticle/CreateArticleContainer";
import EditArticleContainer from "../screens/editArticle/EditArticleContainer";
import { useDispatch } from "react-redux";
import { cookieLogger } from "../store/actions/users";
import AdminPanelContainer from "../screens/adminPanel/AdminPanelContainer";
import Team from "../screens/team/Team";

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
          <Route exact path="/team" component={Team} />
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
