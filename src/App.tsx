import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Import css and font
import './styles/theme.css';
import '@fontsource/roboto';
// Import Redux store
import store from './redux/store';
import { Provider } from 'react-redux';
// Import page components
import Index from './pages/Index';

import reportWebVitals from './reportWebVitals';

// Define custom theme
const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Switch>
            <Route path="/"><Index /></Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
