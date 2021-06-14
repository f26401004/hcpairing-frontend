import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// Import the basic components from Material-UI
import { Grid, AppBar, Toolbar, Typography } from '@material-ui/core';
// Import the transition components from Material-UI
import { Grow } from '@material-ui/core';
// Import the custpm components
import SearchBox from '../components/index/SearchBox';
// Import the healthcare image
import HealthcareIcon from '../assets/icons/healthcare.svg';
import grey from '@material-ui/core/colors/grey';

// Define the props and states for the IndexPage component
const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: grey[50],
    height: 'calc(100vh - 64px)',
    marginTop: '64px'
  },
  iconRoot: {
    textAlign: 'center' as const,
  },
  imageIcon: {
    display: 'flex',
    height: '16vw',
    width: '16vw',
  },
  title: {
    flexGrow: 1,
  },
  descriptionText: {
    color: grey[500],
    textAlign: 'center' as const,
  },
  marginTop24px: {
    marginTop: theme.spacing(4)
  }
});

// Define the props and states for the IndexPage component
type IndexPageProps = {
  classes: any
}
type IndexPageState = {
  elementsDisplayed: Array<boolean>
}
class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
  constructor (props: IndexPageProps) {
    super(props);

    this.state = {
      elementsDisplayed: new Array(3).fill(false),
    };

  }

  componentDidMount (): void {
    for (let i = 0; i < 3; ++i) {
      setTimeout(() => {
        this.setState({ elementsDisplayed: [...this.state.elementsDisplayed.slice(0, i), true, ...this.state.elementsDisplayed.slice(i + 1)] });
      }, 150 * i);
    }
  }

  render (): any {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              HCPairing
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item xs={12} className={classes.marginTop24px}>
            <Grid container justify="center">
              <Grow in={this.state.elementsDisplayed[0]} timeout={{ enter: 400 }}>
                <img className={classes.imageIcon} src={HealthcareIcon}></img>
              </Grow>
            </Grid>
          </Grid>
          <Grid container item xs={12} justify="center" className={classes.marginTop24px}>
            <Grid container item xs={4}>
              <Grow in={this.state.elementsDisplayed[1]} timeout={{ enter: 400 }}>
                <Typography variant="subtitle1" className={classes.descriptionText}>
                  An effective consultant assisting in overcoming obstacles with proven results and policies under the struggling periods.
                </Typography>
              </Grow>
            </Grid>
          </Grid>
          <Grid container item xs={12} justify="center" className={classes.marginTop24px}>
            <Grow in={this.state.elementsDisplayed[2]} timeout={{ enter: 400 }}>
              <div>
                <SearchBox />
              </div>
            </Grow>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(IndexPage);
