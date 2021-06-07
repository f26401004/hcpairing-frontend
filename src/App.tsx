import React from 'react';
import ReactDOM from 'react-dom';
import './styles/theme.css';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto';
import store from './redux/store';
import { Provider } from 'react-redux';

import Index from './pages/Index';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/"><Index /></Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
