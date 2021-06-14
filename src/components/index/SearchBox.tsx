import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// Import the basic components from Materil-UI
import { Grid, Select, MenuItem, TextField, InputBase, Paper, Divider, IconButton } from '@material-ui/core';
// Import the icon
import { Search as SearchIcon } from '@material-ui/icons'



// Define the BootstrapInput component
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
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

// Define the props and states for the SearchBox component
type SearchBoxProps = {
  classes: any
};
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
    width: 800,
    maxWidth: '90vw'
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

class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
  constructor (props: SearchBoxProps) {
    super(props);

    this.state = {
      type: 'healthcare-provider',
      searchKeyword: '',
      paperElevation: 4,
    }
  }

  handleChange (event: any): void {
    const { value } = event.target
    if (value) {
      this.setState({
        type: value,
        searchKeyword: ''
      })
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
      <Paper className={classes.root} elevation={this.state.paperElevation}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}>
        <Select value={this.state.type} onChange={this.handleChange.bind(this)} input={<BootstrapInput />}>
          <MenuItem value="healthcare-provider"> Healthcare Provider</MenuItem>
          <MenuItem value="relief-package"> Relief Package</MenuItem>
        </Select>
        <Divider className={classes.divider} orientation="vertical" />
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={11}>
            <TextField
              variant="outlined"
              size="small"
              className={classes.inputField}
              placeholder={`Search For ${this.state.type === 'healthcare-provider' ? 'Healthcare Provider': 'Relief Package'}`}
              inputProps={{ 'aria-label': 'search keyword' }}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}


export default withStyles(styles)(SearchBox);
