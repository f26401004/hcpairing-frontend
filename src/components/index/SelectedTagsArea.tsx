import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Import the transition components from Material-UI
import { Grid, Grow, Button } from '@material-ui/core';
import { TransitionGroup } from 'react-transition-group';
import { Cancel as CancelIcon, Search as SearchIcon } from '@material-ui/icons';
// Import the action from redux
import { removeSelectedTag } from '../../redux/features/root/action';

import { connect } from 'react-redux'

const mapStateToProps = (state: any): Object => {
  return {
    selectedTags: state.root.selectedTags
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    removeSelectedTag: (target: string) => dispatch(removeSelectedTag(target)),
  };
};

// Define the styles for the SearchBox component
const styles = (theme: any) => ({
  tagButton: {
    margin: theme.spacing(1),
  },
  searchButton: {
    borderRadius: '5em'
  },
  marginTopFour: {
    marginTop: theme.spacing(4)
  },
})

class SelectedTagsArea extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this)
  }

  // Define handler function
  handleClick (event: any): void {
    const { value } = event.currentTarget.dataset;
    if (!value) return;
    this.props.removeSelectedTag(value)
  }

  render (): any {
    const { classes, selectedTags } = this.props;
    console.log(selectedTags)

    return (
      <Grid container justify="center">
        <Grid container item xs={12} justify="center">
          <TransitionGroup>
          {
            selectedTags.map((tag: string): any => (
              <Grow key={`selected-tag-${tag}`}>
                <Button variant="outlined" color="primary" size="small" endIcon={<CancelIcon/>} className={classes.tagButton} onClick={this.handleClick} data-value={tag}>
                {tag}
                </Button>
              </Grow>
            ))
          }
          </TransitionGroup>
        </Grid>
        <Grid container item xs={12} justify="center" className={classes.marginTopFour}>
          <Grow in={selectedTags.length > 0}>
            <Button variant="contained" color="primary" size="large" endIcon={<SearchIcon/>} className={classes.searchButton}>
              Search healthcare provider
            </Button>
          </Grow>
        </Grid>
      </Grid>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SelectedTagsArea));
