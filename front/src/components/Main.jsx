import React from "react";
import SingleArticleContainer from "../containers/SingleArticleContainer";

const Main = () => {
  return (
    <div>
      <div>{/* <Route path="/" component={NavBarContainer} /> */}</div>
      <div>
        <Switch>
          <Route path="/article/:title" component={SingleArticleContainer} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
