import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeContainer from './components/containers/c-home';
import GetContainer from './components/containers/c-get';
import AddContainer from './components/containers/c-add';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"><i className="fas fa-house-user"></i>Main</Link></li>
            <li><Link to={'/academies-add'} className="nav-link"><i className="fas fa-external-link-square-alt"></i>Add academies</Link></li>
            <li><Link to={'/academies-get'} className="nav-link"><i className="fas fa-file-invoice"></i>Get academies</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/academies-add' component={AddContainer} />
            <Route path='/academies-get' component={GetContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;