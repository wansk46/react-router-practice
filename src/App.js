import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link,Switch} from "react-router-dom"
import AboutPage from "./component/AboutPage"
import NotFoundPage from "./component/NotFoundPage"
import UserPage from "./component/UserPage"

class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
          <div>
            <ul>
              <li>
                <Link to ="/about">about</Link>
              </li>
              <li>  
                <Link to ="/user">user</Link>
              </li>
            </ul>
            <Switch>
            <Route path="/" exact component={() => <h1>Home</h1>}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/user" component={UserPage}></Route>
            <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
