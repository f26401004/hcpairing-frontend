import loadjs from 'loadjs'
import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
// Import the basic components from Material-UI
// import { Grid } from '@material-ui/core';

import grey from '@material-ui/core/colors/grey';

const mapStateToProps = (state: any) => ({
  searchSpecialityCode: state.root.searchSpecialityCode,
});

// Define the props and states for the ResultPage component
const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: grey[50],
    height: 'calc(100vh - 64px)',
    marginTop: '64px'
  },
});

// Define the states for the ResultPage component
type ResultPageState = {
}
class ResultPage extends React.Component<any, ResultPageState> {
  // constructor(props: ResultPageProps) {
  //   super(props);
  // }

  componentDidMount (): void {
    const { searchSpecialityCode } = this.props
    console.log(searchSpecialityCode)
    // Load the healthcare locator through loadjs
    loadjs('https://static.healthcarelocator.com/v1/hcl-sdk-web-ui/hcl-sdk.js', async (): Promise<any> => {
      // Initialize HCL SDK
      (async function () {
        await React.createElement('hcl-sdk')
        await customElements.whenDefined('hcl-sdk');
        const HCLSDK = document.querySelector('hcl-sdk');
        if (HCLSDK) {
          (HCLSDK as any).init({
            appName: 'HCPairing',
            apiKey: process.env.REACT_APP_HCLSDK_API_KEY,
            entry: {
              screenName: "searchNearMe",
              specialtyCode: searchSpecialityCode, // TODO: Use the specialtyCode obtained from API service
            },
          });
        }
      })()
    })
    // Load the healthcare locator API through loadjs
    loadjs('https://static.healthcarelocator.com/v1/hcl-sdk-api/hcl-sdk-api.js', (): void => {
      // Initialize HCL SDK API
      const hclAPI = new (window as any).HclAPI({
        apiKey: process.env.REACT_APP_HCLSDK_API_KEY
      });
      console.log(hclAPI)
    })
  }

  render(): any {
    const { classes } = this.props;

    

    return (
      <div className={classes.root}>
        <hcl-sdk />
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(ResultPage));
