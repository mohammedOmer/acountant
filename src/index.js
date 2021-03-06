import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
<Router>
  <Switch>
    <Route path="/" component={App} />
  </Switch>
</Router>, document.getElementById('root'));
registerServiceWorker();
