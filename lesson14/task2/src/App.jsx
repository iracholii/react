import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import User from './User';

const App = () => (
  <div className="page">
    <Router>
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook">Facebook</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <span>Select a user please</span>
          </Route>
          <Route path="/users/:userId">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
