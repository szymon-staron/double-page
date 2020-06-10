import React from "react";
import "./styles/normalize.scss";
import MainLayout from "./components/layout/mainLayout/mainLayout";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/pages/contact/contact";
import Home from "./components/pages/home/home"
import Product from './components/pages/product/product'
import Blog from './components/pages/blog/blog';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/bike-scott" component={Home} />
        <Route exact path="/rental" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/sale" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </MainLayout>
  );
}
export default App;
