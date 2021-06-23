import React, { Component } from 'react';
import { connect } from "react-redux";
import {Redirect, Route} from "react-router-dom";
import { getLocalStorage } from "../helpers/localStorage";

class PrivateRoute extends Component {
//   componentDidUpdate(prevProps) {
//       if (
//         this.props.path === this.props.location.pathname &&
//         this.props.location.pathname !== prevProps.location.pathname
//       ) {
//         // content.scrollTop = 0;
//         window.scrollTo(0, 0);
//       }
//   }

  render() {

    const userToken = getLocalStorage("user_token") || false;
      const {component: Component, ...rest} = this.props;
      return (
        <Route {...rest} render={(props) => (
          userToken.exp > Date.now()
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }} />
            )} />
      );
  }
}

const mapStateToProps = (state) => ({
  stateOfAuthReducers: state.AuthReducers
})

export default connect(mapStateToProps, null)(PrivateRoute);