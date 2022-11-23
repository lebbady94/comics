import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './layout/views/home/home';
import Detail from './layout/views/detail/detail';
import Header from './layout/commons/header/header';
import { navigationEntries } from './utils/navigation-entries';
import './styles/main.scss';

const App: React.FC = () => (
  <div className="App">
    <Router>
    <Header title="ISSUES" navEntries={navigationEntries} />
      <Switch>
        <Route path="/issue/:issueId" component={Detail} exact />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </div>
)

export default App;
