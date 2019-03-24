import React, { Component } from 'react';
import DisplayRepInfo from './DisplayRepInfo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import PopUp from './PopUp'
import 'tachyons'

export default class App extends Component {
   
    render() {
       return(
          <Router>
              <div>
          <Route exact path="/" component={Home} />
          <Route path="/popup" component={PopUp} />
          </div>
          </Router> 
       )
    }
}
