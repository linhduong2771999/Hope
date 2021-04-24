import React, { Component } from "react";

//import component
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
// import Footer from "./Footer/Footer";
class Wrapper extends Component {
  constructor(props){
    super(props);

    this.sidebarRef = React.createRef();
  }

  toggleSidebarResponsive = () => {
    this.sidebarRef.toggleSidebarResponsive();
  }
  
  render() {
    console.log("Wrapper render !!!");
    return (
      
      <div className="hope">
        <Header  toggleSidebarResponsive={this.toggleSidebarResponsive} />
        {/*
        */}
        <Sidebar ref={ref => (this.sidebarRef = ref)} location={this.props.location}/>
        
        <div className="hope-content" id="hope-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Wrapper;
