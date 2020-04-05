import { ApolloProvider } from "@apollo/react-hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "shards-ui/dist/css/shards.min.css";
import { client } from "./ApolloClient";
import { ROLE } from "./constants/constants";
import Dashboard from "./modules/dashboard/Dashboard";
import { AboutLayout } from "./modules/layout/about.component";
import { ArticlesLayout } from "./modules/layout/articles.component";
import { CategoriesLayout } from "./modules/layout/categories.component";
import { LandingLayout } from "./modules/layout/landing.component";
import { SingleCategory } from "./modules/layout/single-category.component";
import { SingleArticleLayout } from "./modules/layout/single.component";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingLayout />
          </Route>
          <Route exact path="/articles">
            <ArticlesLayout />
          </Route>
          <Route exact path="/articles/:articleId">
            <SingleArticleLayout />
          </Route>
          <Route exact path="/categories">
            <CategoriesLayout />
          </Route>
          <Route exact path="/categories/:categoryId">
            <SingleCategory />
          </Route>
          <Route exact path="/about">
            <AboutLayout />
          </Route>
          {localStorage.getItem("TOKEN") !== null &&
            localStorage.getItem("ROLE") === ROLE.Admin && (
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            )}
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
