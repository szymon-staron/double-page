import React from "react";
import "./styles/normalize.scss";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout/mainLayout";
import Contact from "./components/pages/contact/contact";

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Contact} />
        <Route exact path="/prododuct" component={Contact} />
        <Route exact path="/bike-scott" component={Contact} />
        <Route exact path="/rental" component={Contact} />
        <Route exact path="/blog" component={Contact} />
        <Route exact path="/sale" component={Contact} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </MainLayout>
  );
}

export default App;
