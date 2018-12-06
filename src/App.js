import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link} from "react-router-dom"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to ="/about">about</Link>
              </li>
            </ul>
            <Route path="/about" component={()=><h2>about</h2>}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
