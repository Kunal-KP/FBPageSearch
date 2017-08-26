import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';

 const Body = () => {
    return (
    <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/services' component={Services}/>
    </Switch>
    )

}

export default Body;