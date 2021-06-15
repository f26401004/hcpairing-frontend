import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// Import the healthcare image
import HealthcareIcon from '../../assets/icons/healthcare.svg';
import ReliefPackageIcon from '../../assets/icons/relief.svg';
// Import the transition components from Material-UI
import { Grow } from '@material-ui/core';

import { connect } from 'react-redux'

const mapStateToProps = (state: any): Object => {
  return {
    root: state.root
  }
}

// Define the styles for the SearchBox component
const styles = (theme: any) => ({
  root: {
    position: 'relative' as 'relative',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 224
    },
    [theme.breakpoints.up('sm')]: {
      height: 326
    }
  },
  imageIcon: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
})

class SearchTypeImage extends React.Component<any, any> {
  render (): any {
    const { classes, root } = this.props;
    console.log(root)

    return (
      <span className={classes.root}>
        <Grow in={root.searchType === 'healthcare-provider'} timeout={{ enter: 400, exit: 400 }} mountOnEnter unmountOnExit style={{ position: 'absolute' }}>
          <img className={classes.imageIcon} src={HealthcareIcon} alt="Healthcare provider graphic"></img>
        </Grow>
        <Grow in={root.searchType === 'relief-package'} timeout={{ enter: 400, exit: 400 }} mountOnEnter unmountOnExit style={{ position: 'absolute' }}>
          <img className={classes.imageIcon} src={ReliefPackageIcon} alt="Relief package graphic"></img>
        </Grow>
      </span>
    )
  }
}


export default connect(mapStateToProps)(withStyles(styles)(SearchTypeImage));
