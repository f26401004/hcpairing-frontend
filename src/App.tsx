import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import HelpModal from './components/index/HelpModal';
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
import { connect } from 'react-redux'
import { Provider } from 'react-redux';
import { setIsOpenHelpModal } from './redux/features/root/action';
// Import page components
import Index from './pages/Index';
import Result from './pages/Result';

import reportWebVitals from './reportWebVitals';

console.log(store.getState())

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

// const handleClickHelpButton = (): void => {
//   state.isOpenHelpModal = true
//   console.log(state)
// };
// const handleCloseHelpModal = (): void => {
//   state.isOpenHelpModal = false
// };

console.log(store.getState())



const mapStateToProps = (state: any): Object => {
  return {
    isOpenHelpModal: state.root.isOpenHelpModal,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsOpenHelpModal: (target: boolean) => dispatch(setIsOpenHelpModal(target)),
  };
};

class App extends React.Component<any, any> {
  constructor (props: any) {
    super(props);

    this.handleClickHelpModal = this.handleClickHelpModal.bind(this);
    this.hnadleCloseHelpModal = this.hnadleCloseHelpModal.bind(this);
  }
  
  handleClickHelpModal () {
    this.props.setIsOpenHelpModal(true)
  }

  hnadleCloseHelpModal () {
    this.props.setIsOpenHelpModal(false)
  }

  render () {
    const { isOpenHelpModal, setIsOpenHelpModal } = this.props;
    console.log(setIsOpenHelpModal);
    return (
      <ThemeProvider theme={customTheme}>
        <AppBar position="fixed">
          <Toolbar>
            <Grid container justify="space-between" alignItems="center">
              <Typography variant="h6">
                HCPairing
              </Typography>
              <Button color="inherit" size="large" onClick={this.handleClickHelpModal}> Help </Button>
              <HelpModal open={isOpenHelpModal} handleClose={this.hnadleCloseHelpModal} ></HelpModal>
            </Grid>
          </Toolbar>
        </AppBar>
        <Router>
          <Switch>
            <Route path="/search"><Result /></Route>
            <Route path="/"><Index /></Route>
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <ConnectedApp />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
