import React, { Component } from 'react';
import "./assets/sass/App.scss";
import 'react-toastify/dist/ReactToastify.css';

import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import { AuthActions } from "./store/actions/index";
import { createLoadingSelector } from "./helpers/loadingSelector";

import Router from "./routers/index";
import LoadingPage from './components/LoadingPage/LoadingPage';
import PageNetworkError from './modules/PageNetworkError/PageNetworkError';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }
  componentDidMount = () => {
    const body = {
      callBack: () => {
        this.setState({redirect: true})
      }
    }
    this.props.checkedLoginAccountRequest(body);    
  }   

  render() {
    {/*
    */}
    if(this.props.loadingFromCheckedLogin) return <LoadingPage />
    if(this.state.redirect) return <PageNetworkError />
    return (
      <h1>
        Hotfix: Network error
        <Router />
      {/*
      */}
      </h1>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingFromCheckedLogin: createLoadingSelector(["CHECKED_LOGIN_ACCOUNT"])(state)
})
const mapDispatchToProps = (dispatch) => ({
  checkedLoginAccountRequest: (payload) => dispatch(AuthActions.checkedLoginAccountRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);