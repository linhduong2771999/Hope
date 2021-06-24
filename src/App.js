import React, { Component } from 'react';
import "./assets/sass/App.scss";
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import { AuthActions } from "./store/actions/index";
import { createLoadingSelector } from "./helpers/loadingSelector";

import Router from "./routers/index";
import LoadingPage from './components/LoadingPage/LoadingPage';
class App extends Component {

  componentDidMount = () => {
    this.props.checkedLoginAccountRequest();    
  }

  render() {

    {/*
      if(this.props.loadingFromCheckedLogin) return <LoadingPage />
    */}
    return (
        <Router />
    );
  }
}

const mapStateToProps = (state) => ({
  loadingFromCheckedLogin: createLoadingSelector(["CHECKED_LOGIN_ACCOUNT"])(state)
})
const mapDispatchToProps = (dispatch) => ({
  checkedLoginAccountRequest: () => dispatch(AuthActions.checkedLoginAccountRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);