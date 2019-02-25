import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import JobList from './components/JobList';
import Job from './components/Job';

class App extends Component {
  super(props){}
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/joblist" component={JobList}></Route>
          <Route exact path="/jobs/:job" component={Job}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}


export default App;
