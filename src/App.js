import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from "redux";
import { check, watch } from 'is-offline';

import './App.css';
import Header from "./Header";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Login from "./Login";
import Page2 from "./Page2";
import Offline from "./Offline";
// import Counter from "./Counter";

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

const OfflineContext = React.createContext(false);


if('navigator' in window){
  window.addEventListener('online', function(e) { console.log('online'); });
}

const loginStore = (state = false, action) => {  //Reducer Function
  switch (action.type) {
      case 'LOGIN':
          return true;
      case 'LOGOUT':
          return false
      default:
          return state;
  }
}

const store = createStore(loginStore)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      <OfflineContext.Consumer>
        { (isOffline) =>(
          isOffline
            ? <Offline />
            : <Component {...props} />
        )
          
        }
      </OfflineContext.Consumer>
  )} />
)
class App extends Component {
  state = {
    isOffline:false
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      // console.log("Route Changed...")
      var unwatch;
      check().then( (status) =>{
        if(status === true){
          this.setState({isOffline:true})
          console.log("You are offline...")
          unwatch = watch((status) =>{
            if(status === false){
              this.setState({isOffline:false})
              console.log("Welcome Back online !!!")
              unwatch()
            }
          })
        }
      });
    }
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <OfflineContext.Provider value={this.state.isOffline}>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute path='/profile' component={Profile} />
              <PrivateRoute path='/about' component={Page2} />
              <Route path='/login' component={Login} />
            </Switch>
          </OfflineContext.Provider>
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);
