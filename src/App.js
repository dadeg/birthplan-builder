import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import Plan from './pages/Plan.js';

export default class App extends Component {
  setPlanDetails(property, value) {
    this.setState((prevState, props) => {
      console.log('setting plan details');
      return Object.assign({}, prevState, { [property]: value });
    });
  }

  getPlanDetails() {
    console.log('getting plan details');
    return this.state || {};
  }

  render() {
    
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h2>Your Visual Birthplan Builder</h2>
          </div>
          <Switch>
            <Route exact path="/" render={routeProps => <Home {...routeProps} getPlanDetails={this.getPlanDetails.bind(this)} setPlanDetails={this.setPlanDetails.bind(this)} />} />
            <Route path="/plan" render={routeProps => <Plan {...routeProps} getPlanDetails={this.getPlanDetails.bind(this)} />} />
          </Switch>
        </div> 
      </Router>
    );
  }
}
