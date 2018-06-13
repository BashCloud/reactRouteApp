import React from 'react';
import { connect } from 'react-redux'

import './Header.css'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import Home from '@material-ui/icons/Home';
import Chat from '@material-ui/icons/Chat';
import Phone from '@material-ui/icons/Phone';
import Camera from '@material-ui/icons/Camera';


import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';



import { Link, NavLink, Redirect } from 'react-router-dom'

const styles = {
  flex: {
    flex: 1,
  },
};

class Header extends React.Component {
  state = {
    anchorEl: null,
    left: false,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      left: open,
    });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div >
        <AppBar position="static">
          <Toolbar>
            {
              this.props.authorized && (
                <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
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
                  <Link to='/' className="noLink"><MenuItem> DashBoard</MenuItem></Link>
                  <NavLink to="/profile" className="noLink">  <MenuItem> Profile</MenuItem></NavLink>
                  <MenuItem onClick={this.props.Logout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        {(this.props.authorized === false) &&
          <Redirect to='/login' />}
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <List component="nav">
              <NavLink to="/" className="noLink"><ListItem button>
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText inset primary="Dashboard" />
              </ListItem></NavLink>
              <Divider />

              <NavLink to="/" className="noLink"><ListItem button>
                <ListItemIcon><Chat /></ListItemIcon>
                <ListItemText inset primary="Action A" />
              </ListItem></NavLink>

              <NavLink to="/" className="noLink"><ListItem button>
                <ListItemIcon><Phone /></ListItemIcon>
                <ListItemText inset primary="Action B" />
              </ListItem></NavLink>

              <NavLink to="/" className="noLink"><ListItem button>
                <ListItemIcon><Camera /></ListItemIcon>
                <ListItemText inset primary="Action C" />
              </ListItem></NavLink>

              <NavLink to="/" className="noLink"><ListItem button>
                <ListItemIcon><StarIcon /></ListItemIcon>
                <ListItemText inset primary="Action D" />
              </ListItem></NavLink>

              <Divider />
              <NavLink to="/profile" className="noLink"><ListItem button>
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText inset primary="Profile" />
              </ListItem></NavLink>
              <ListItem button onClick={this.props.Logout}>
                <ListItemIcon><PowerSettingsNew /></ListItemIcon>
                <ListItemText inset primary="Logout" />
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
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

