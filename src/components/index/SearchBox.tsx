import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// Import the basic components from Materil-UI
import { Grid, Input, Paper, IconButton, InputAdornment, Menu, MenuItem } from '@material-ui/core';
// Import the icon
import { Search as SearchIcon, Mic as MicIcon } from '@material-ui/icons'

import { setSearchType } from '../../redux/features/root/action';

import axios from '../../plugins/axios'

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSearchType: (target: string) => dispatch(setSearchType(target)),
  }
}

// Define the states for the SearchBox component
type SearchBoxState = {
  searchKeyword: string,
  searchResult: Array<string>,
  searchTimer: NodeJS.Timeout,
  selectedSearchResult: Array<string>,
  searchBoxRef: React.RefObject<any>,
  menuAnchorElement: any,
  paperElevation: number,
}
// Define the styles for the SearchBox component
const styles = (theme: any) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  inputField: {
    width: '100%',
    flex: 1,
    padding: theme.spacing(1),
    boxSizing: 'border-box' as 'border-box',
  },
  divider: {
    height: '100%',
    margin: theme.spacing(1),
  },
  iconButton: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  menu: {
    top: '64px',
    left: 0,
  }
})

class SearchBox extends React.Component<any, SearchBoxState> {
  constructor (props: any) {
    super(props);
    // Define the default value for the state
    this.state = {
      searchKeyword: '',
      searchResult: [],
      searchTimer: setTimeout(() => {}, 0),
      selectedSearchResult: [],
      searchBoxRef: React.createRef(),
      menuAnchorElement: null,
      paperElevation: 4,
    }
    // Bind the handler function with this
    this.handleTextfieldChange = this.handleTextfieldChange.bind(this)
    this.handleSearchResultClick = this.handleSearchResultClick.bind(this)
    this.handleSearchResultClose = this.handleSearchResultClose.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  // Define built-in function
  async fetchSearchResultByPrefix (payload: string): Promise<any> {
    const { data } = await axios.get(`/tags?prefix=${payload}`)
    this.setState({
      ...this.state,
      searchResult: [...data.tags]
    })
  }

  // Define handler function
  handleTextfieldChange (event: any): void {
    const { value } = event.target
    if (value) {
      // Search the result after 100ms delay to prevent continuous and useless searching
      clearTimeout(this.state.searchTimer)
      this.setState({
        ...this.state,
        searchKeyword: value,
        searchTimer: setTimeout(() => {
          this.fetchSearchResultByPrefix(value).then((): void => {
            console.log(this.state.searchBoxRef.current)
            // Set the menu anchor element after obtaining search result
            this.setState({
              ...this.state,
              menuAnchorElement: this.state.searchBoxRef.current
            })
          })
        }, 100)
      })
      
    }
  }
  handleSearchResultClick (event: any): void {
    const { value } = event.target
    if (value) {
      this.setState({
        ...this.state,
        selectedSearchResult: [...this.state.selectedSearchResult, event.target.value]
      })
    }

  }
  handleSearchResultClose (event: any): void {
    this.setState({
      ...this.state,
      menuAnchorElement: null
    })
  }
  handleMouseOver (event: any): void {
    this.setState({ paperElevation: 8 })
  }
  handleMouseOut (event: any): void {
    this.setState({ paperElevation: 4 })
  }

  render (): any {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={this.state.paperElevation} style={{ boxSizing: 'border-box' }}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}>
        <Grid container justify="space-between" alignItems="center" ref={this.state.searchBoxRef}>
          <Input
            autoFocus
            disableUnderline
            className={classes.inputField}
            placeholder="Search For Healthcare Provider"
            inputProps={{ 'aria-label': 'search keyword' }}
            onChange={this.handleTextfieldChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton type="submit" className={classes.iconButton} aria-label="voice" edge="end">
                  <MicIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          {/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton> */}
        </Grid>
        <Menu keepMounted open={this.state.searchResult.length > 0 && this.state.menuAnchorElement} className={classes.menu} anchorEl={this.state.menuAnchorElement} onClose={this.handleSearchResultClose}>
          {
            this.state.searchResult.map((keyword: string) => {
              return (<MenuItem key={`search-result-${keyword}`} onClick={this.handleSearchResultClick}> {keyword} </MenuItem>)
            })
          }
        </Menu>
      </Paper>
    )
  }
}


export default connect(null, mapDispatchToProps)(withStyles(styles)(SearchBox));
