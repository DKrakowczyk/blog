import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./ApolloClient";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import { LandingLayout } from "./modules/layout/landing.component";
import { SingleArticleLayout } from "./modules/layout/single.component";
import { CategoriesLayout } from "./modules/layout/categories.component";
import { AboutLayout } from "./modules/layout/about.component";
import { LoaderComponent } from "./modules/layout/loader.component";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingLayout />
          </Route>
          <Route exact path="/articles/:articleId">
            <SingleArticleLayout />
          </Route>
          <Route exact path="/categories">
            <CategoriesLayout />
          </Route>
          <Route exact path="/about">
            <AboutLayout />
          </Route>
          {localStorage.getItem("TOKEN") !== null && (
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
