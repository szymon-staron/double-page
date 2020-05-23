// <<<<<<< HEAD
// import React from "react";
// import "./styles/normalize.scss";
// import MainLayout from "./components/layout/mainLayout/mainLayout";
// import { Switch, Route } from "react-router-dom";
// import Contact from "./components/pages/contact/contact";
// import Home from "./components/pages/home/home"
// function App() {
//   return (
//     <MainLayout>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/prododuct" component={MainLayout} />
//         <Route exact path="/bike-scott" component={MainLayout} />
//         <Route exact path="/rental" component={MainLayout} />
//         <Route exact path="/blog" component={MainLayout} />
//         <Route exact path="/sale" component={MainLayout} />
//         <Route exact path="/contact" component={Contact} />
//       </Switch>
//     </MainLayout>
//   );
// =======
import React from 'react';


import './styles/normalize.scss';
import { Switch,Route } from 'react-router-dom';
import MainLayout from "./components/layout/mainLayout/mainLayout";


function App() {

 return (
    <Switch>
        <Route exact path='/' component={MainLayout}/>
        <Route exact path='/prododuct' component={MainLayout}/>
        <Route exact path='/bike-scott' component={MainLayout}/>
        <Route exact path='/rental' component={MainLayout}/>
        <Route exact path='/blog' component={MainLayout}/>
        <Route exact path='/sale' component={MainLayout}/>
    </Switch>
 )
}

export default App;
