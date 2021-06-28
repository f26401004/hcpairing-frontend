import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// Import the transition components from Material-UI
import { Grid, Grow, Button, CircularProgress } from '@material-ui/core';
import { TransitionGroup } from 'react-transition-group';
import { Cancel as CancelIcon, Search as SearchIcon } from '@material-ui/icons';
// Import the action from redux
import { removeSelectedTag, setSearchSpecialityCode, clearSelectedTag } from '../../redux/features/root/action';
import API from '../../api'

import { connect } from 'react-redux'

const mapStateToProps = (state: any): Object => {
  return {
    selectedTags: state.root.selectedTags,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    removeSelectedTag: (target: string) => dispatch(removeSelectedTag(target)),
    setSearchSpecialityCode: (target: string) => dispatch(setSearchSpecialityCode(target)),
    clearSelectedTag: () => dispatch(clearSelectedTag()),
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

    this.state = {
      isSearching: false
    }

    this.handleTagButtonClick = this.handleTagButtonClick.bind(this)
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this)
  }

  // Define handler function
  handleTagButtonClick (event: any): void {
    const { value } = event.currentTarget.dataset;
    if (!value) return;
    this.props.removeSelectedTag(value)
  }
  async handleSearchButtonClick (event: any): Promise<void> {
    this.setState({
      ...this.state,
      isSearching: true
    })
    // Get the current location
    if (!navigator.geolocation) {
      alert("Sorry, but Geolocation is not supported by this browser.");
      this.setState({
        ...this.state,
        isSearching: false
      })
    }

    navigator.geolocation.getCurrentPosition(async (position): Promise<void> => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      // Fetch for the zip code
      const zipcode = await API.search.getZipcode({ lat, lng })
      console.log(zipcode)

      // Fetch for the matched speciality code
      const specialities = await API.search.postRecords({
        zipcode,
        tags: this.props.selectedTags
      })
      console.log(specialities)
      if (specialities.length > 0) {
        this.props.setSearchSpecialityCode(specialities[0])
      } else {
        // Set the default speciality to Cough
        this.props.setSearchSpecialityCode('Cough')
      }
      // Route to the Result page
      this.props.history.push('/search')
      this.props.clearSelectedTag()
      this.setState({
        ...this.state,
        isSearching: false
      })
    });
  }

  render (): any {
    const { classes, selectedTags } = this.props;
    const { isSearching } = this.state;

    return (
      <Grid container justify="center">
        <Grid container item xs={12} justify="center">
          <TransitionGroup>
          {
            selectedTags.map((tag: string): any => (
              <Grow key={`selected-tag-${tag}`}>
                <Button variant="outlined" color="primary" size="small" endIcon={<CancelIcon/>} className={classes.tagButton} onClick={this.handleTagButtonClick} data-value={tag}>
                {tag}
                </Button>
              </Grow>
            ))
          }
          </TransitionGroup>
        </Grid>
        <Grid container item xs={12} justify="center" className={classes.marginTopFour}>
          <Grow in={selectedTags.length > 0}>
            <Button color="primary" variant="contained" endIcon={isSearching ? <CircularProgress size={18} color="inherit"/> : <SearchIcon />} className={classes.searchButton} onClick={this.handleSearchButtonClick}>
              Search healthcare provider
            </Button>
          </Grow>
        </Grid>
      </Grid>
    )
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SelectedTagsArea)));
