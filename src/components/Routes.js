import React, { Component } from "react";
import { Route,Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import  FunctionalRole from './FunctionalRole'
import Drop from "./Drop"



export default class Routes extends Component {
    render() {
        return (
         <Router>
            <Switch>
              <Route exact={true} path="/" component={Drop} />
              
              <Route exact={true} path="/FunctionalRole" component={FunctionalRole} />
              
            </Switch>
       </Router>
        )
    }
}