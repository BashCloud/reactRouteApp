import React from 'react';
import { connect } from 'react-redux'


import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


import { NavLink, Redirect } from 'react-router-dom'

const styles = {
  flex: {
    flex: 1,
  },
};

class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    // debugger;


    return (
      <div >
        <AppBar position="static">
          <Toolbar>
            {
              this.props.authorized && (
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
              )
            }

            <Typography variant="title" color="inherit" className={classes.flex}>
              User Route App
            </Typography>
            {this.props.authorized && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  
                  open={open}
                  onClick={this.handleClose}
                >
                  <NavLink to='/' ><MenuItem> DashBoard</MenuItem></NavLink>
                  <NavLink to="/profile"> <MenuItem> Profile</MenuItem></NavLink>
                  <MenuItem onClick={this.props.Logout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        {(this.props.authorized === false) &&
          <Redirect to='/login' />}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    authorized: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    Logout: () => dispatch({
      type: 'LOGOUT'
    })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header))

