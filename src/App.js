import React, { Component } from 'react';
import "./assets/sass/App.scss";
import Router from "./routers/index";
class App extends Component {

  componentDidMount = () => {
    console.log("Did mount on App !!!")
  }

  render() {
    console.log("App render !!!");
    return (
      <Router />
    );
  }
}

export default App;