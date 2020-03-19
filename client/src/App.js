import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { Container, Row, Col } from "shards-react";
import { client } from "./ApolloClient";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavbarLanding } from "./modules/navbar/navbar.component";
import Dashboard from "./modules/dashboard/Dashboard";
import { ArticleGallery } from "./modules/article/articleGallery.component";
import { LandingLayout } from "./modules/layout/landing.component";
import { SingleArticleLayout } from "./modules/layout/single.component";
import { CategoriesLayout } from "./modules/layout/categories.component";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingLayout />
          </Route>
          <Route exact path="/articles/single">
            <SingleArticleLayout />
          </Route>
          <Route exact path="/categories">
            <CategoriesLayout />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
