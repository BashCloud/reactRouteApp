import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from "redux";


import './App.css';
import Header from "./Header";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Login from "./Login";
// import Counter from "./Counter";

import { Switch, Route, Redirect } from 'react-router-dom'

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
    true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute path='/profile' component={Profile} />
              <Route path='/login' component={Login} />
            </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
