import React from 'react';
import './styles/normalize.scss';
import MainLayout from './components/layout/mainLayout/mainLayout'
import { Switch,Route } from 'react-router-dom';
import Contact from './components/pages/contact/contact'

function App() {

 return (
    <Switch>
        <Route exact path='/' component={MainLayout}/>
        <Route exact path='/prododuct' component={MainLayout}/>
        <Route exact path='/bike-scott' component={MainLayout}/>
        <Route exact path='/rental' component={MainLayout}/>
        <Route exact path='/blog' component={MainLayout}/>
        <Route exact path='/sale' component={MainLayout}/>
        <Route exact path='/contact' component={Contact}/>
    </Switch>
 )
}

export default App;
