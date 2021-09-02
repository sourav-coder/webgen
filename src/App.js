import React from 'react'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

export default function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/register" component={Login}/>


            </Switch>
        </Router>
        )
}