import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// Import the basic components from Materil-UI
import { Grid, Select, MenuItem, TextField, InputBase, Paper, Divider, IconButton } from '@material-ui/core';
// Import the icon
import { Search as SearchIcon } from '@material-ui/icons'

import { setSearchType } from '../../redux/features/root/action';


// Define the BootstrapInput component
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      width: '20%'
    },
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSearchType: (target: string) => dispatch(setSearchType(target)),
  }
}

// Define the states for the SearchBox component
type SearchBoxState = {
  type: string,
  searchKeyword: string,
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
    flex: 1
  },
  divider: {
    height: '100%',
    margin: theme.spacing(1),
  },
  iconButton: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
})

class SearchBox extends React.Component<any, SearchBoxState> {
  constructor (props: any) {
    super(props);
    // Define the default value for the state
    this.state = {
      type: 'healthcare-provider',
      searchKeyword: '',
      paperElevation: 4,
    }
    // Bind the handler function with this
    this.handleChange = this.handleChange.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handleChange (event: any): void {
    const { value } = event.target
    if (value) {
      this.setState({
        type: value,
        searchKeyword: ''
      })
      this.props.setSearchType(value)
    }
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
        <Select value={this.state.type} onChange={this.handleChange} input={<BootstrapInput />}>
          <MenuItem value="healthcare-provider"> Healthcare Provider </MenuItem>
          <MenuItem value="relief-package"> Relief Package</MenuItem>
        </Select>
        <Divider className={classes.divider} orientation="vertical" />
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={10} sm={10} md={11} xl={11}>
            <TextField
              variant="outlined"
              size="small"
              className={classes.inputField}
              placeholder={`Search For ${this.state.type === 'healthcare-provider' ? 'Healthcare Provider': 'Relief Package'}`}
              inputProps={{ 'aria-label': 'search keyword' }}
            />
          </Grid>
          <Grid item xs={2} sm={2} md={1} xl={1}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}


export default connect(null, mapDispatchToProps)(withStyles(styles)(SearchBox));
