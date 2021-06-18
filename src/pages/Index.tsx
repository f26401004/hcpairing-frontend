import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// Import the basic components from Material-UI
import { Grid, Typography } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
// Import the transition components from Material-UI
import { Grow } from '@material-ui/core';
// Import the custom components
import SearchBox from '../components/index/SearchBox';
import SearchTypeImage from '../components/index/SearchTypeImage';
import SelectedTagsArea from '../components/index/SelectedTagsArea';



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
  descriptionText: {
    color: grey[500],
    textAlign: 'center' as const,
  },
  marginTopFour: {
    marginTop: theme.spacing(4)
  },
});




// Define the props and states for the IndexPage component
type IndexPageProps = {
  classes: any
}
type IndexPageState = {
  elementsDisplayed: Array<boolean>
}
class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
  constructor(props: IndexPageProps) {
    super(props);

    this.state = {
      elementsDisplayed: new Array(4).fill(false),
    };

  }

  componentDidMount(): void {
    // Display the components with incremental delay
    for (let i = 0; i < 4; ++i) {
      setTimeout(() => {
        this.setState({ elementsDisplayed: [...this.state.elementsDisplayed.slice(0, i), true, ...this.state.elementsDisplayed.slice(i + 1)] });
      }, 150 * i);
    }
  }

  render(): any {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center" className={classes.marginTopFour}>
          <Grid container item xs={12} justify="center">
            <Grid container item xs={8} sm={8} md={2} xl={2} justify="center">
              <Grow in={this.state.elementsDisplayed[0]} timeout={{ enter: 400 }}>
                <SearchTypeImage />
              </Grow>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center"  className={classes.marginTopFour}>
          <Grid container item xs={12} justify="center">
            <Grid container item xs={11} sm={11} md={4} xl={4}>
              <Grow in={this.state.elementsDisplayed[1]} timeout={{ enter: 400 }}>
                <Typography variant="subtitle1" className={classes.descriptionText}>
                  An effective consultant assisting in overcoming obstacles with proven results and policies under the struggling periods.
                </Typography>
              </Grow>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center"  className={classes.marginTopFour}>
          <Grid container item xs={10} sm={10} md={6} xl={6} justify="center">
            <Grow in={this.state.elementsDisplayed[2]} timeout={{ enter: 400 }}>
              <span style={{ width: '100%' }}>
                <SearchBox />
              </span>
            </Grow>
          </Grid>
        </Grid>
        <Grid container justify="center"  className={classes.marginTopFour}>
          <Grid container item xs={10} sm={10} md={6} xl={6} justify="center">
            <Grow in={this.state.elementsDisplayed[3]} timeout={{ enter: 400 }}>
              <span style={{ width: '100%' }}>
                <SelectedTagsArea />
              </span>
            </Grow>
          </Grid>
        </Grid>

      </div>
    );
  }
}

export default withStyles(styles)(IndexPage);
