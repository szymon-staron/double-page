import React from 'react';


import './styles/normalize.scss';
import MainMenu from './components/layout/mainMenu/mainMenu'
import { Switch,Route } from 'react-router-dom';



function App() {

 return (
    <Switch>
        <Route exact path='/' component={MainMenu}/>
        <Route exact path='/prododuct' component={MainMenu}/>
        <Route exact path='/bike-scott' component={MainMenu}/>
        <Route exact path='/rental' component={MainMenu}/>
        <Route exact path='/blog' component={MainMenu}/>
        <Route exact path='/sale' component={MainMenu}/>
    </Switch>
 )
}

export default App;
