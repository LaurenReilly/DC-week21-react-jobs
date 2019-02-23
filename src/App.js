import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import JobList from './components/JobList';
import Job from './components/Job';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route to="/joblist" component={JobList}></Route>
          <Route to="/:job" component={Job}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
