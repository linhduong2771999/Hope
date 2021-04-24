import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ModalPopupActions } from "../../../store/actions/index";
import Button from "../../../components/Button/Button";
import FontAwesome from "../../../components/FontAwesome/FontAwesome";


import Logo from "../../../assets/images/common/logo.png";
import DefaultUserMale from "../../../assets/images/common/default-user-male.png";
import DefaultUserFemale from "../../../assets/images/common/default-user-female.png";
import Bell from "../../../assets/images/svg/bell.svg";
import Cart from "../../../assets/images/svg/cart-arrow-down.svg";
import Bars from "../../../assets/images/svg/bars.svg";
import Profile from "../../../assets/images/svg/user.svg";
import Account from "../../../assets/images/svg/lock-alt.svg";
import Cog from "../../../assets/images/svg/cog.svg";
import BtnCollapseNavbar from "../../../assets/images/svg/sort-alt.svg"

class Header extends Component {
    constructor(props){
        super(props);
        this.state =  {
            isCollapse: false
        }

        this.headerBrand = React.createRef();
        this.headerNavbar = React.createRef();
        this.headerNavbarSubmenu = React.createRef();
    }

    // componentWillUnmount = () => {
    //     const headerNavbar = document.getElementById("header-navbar");
    //     headerNavbar.style.maxHeight = "0px";
    // }
    toggleSubMenu = () => {
        if(!this.headerNavbarSubmenu.current.classList.contains("submenu-header--slide-down")) {
            this.headerNavbarSubmenu.current.classList.add("submenu-header--slide-down");
        } else{
            this.headerNavbarSubmenu.current.classList.remove("submenu-header--slide-down");
        }
    }

    toggleSideNavbar = () => {
        // const { isOpen } = this.props.stateOfModalPopupReducers;
        const sidebar = document.getElementById("sidebar");
        const hopeContent = document.getElementById("hope-content");
        
        if(!this.headerBrand.current.classList.contains("header--shrink")){
            this.headerBrand.current.classList.add("header--shrink");
            this.headerBrand.current.classList.remove("header--stretch");

            sidebar.classList.add("sidebar--shrink");
            sidebar.classList.remove("sidebar--stretch");

            hopeContent.classList.add("hope-content--shrink");
            hopeContent.classList.remove("hope-content--stretch");
        } else {
            this.headerBrand.current.classList.remove("header--shrink");
            this.headerBrand.current.classList.add("header--stretch");

            sidebar.classList.remove("sidebar--shrink");
            sidebar.classList.add("sidebar--stretch");

            hopeContent.classList.remove("hope-content--shrink");
            hopeContent.classList.add("hope-content--stretch");
        }
        console.log(sidebar);
        // if(isOpen){
        //     this.props.hidePopup({popupName: "collapseSideNavbar", popupProps: null});
        // } else {
        //     this.props.openPopup({popupName: "collapseSideNavbar", popupProps: null});
        // }
    }

    toggleHeaderNavbar = () => {
        if(this.headerNavbar.current.style.maxHeight === "70px"){
            this.headerNavbar.current.style.maxHeight = "0px";
        } else {
            this.headerNavbar.current.style.maxHeight = "70px";
        }
    }

    toggleSideNavbarResponsive = () => {
        this.props.toggleSidebarResponsive();
    }

    renderCollapseBtn = () => (
        <button className="btn-collapse" onClick={this.toggleSideNavbar}>
            <FontAwesome 
                className="btn-collapse-icon"
                src={Bars}
                width="23px"
                height="23px"
                alt="Hope logo"
            /> 
        </button>
    )
    render() {
        const { isOpen } = this.props.stateOfModalPopupReducers;
        const stretchClassName = isOpen ? "header--stretch" : "header--shrink";
        return (
            <div className={`header`}>
                <div className={`header-container `}>
                    <div className={`header-brand`} ref={this.headerBrand}>
                        <div className="brand-container">
                            <div className="collapse-sidebar-responsive">
                                <Button className="btn--collapse-sidebar-responsive" onClick={this.toggleSideNavbarResponsive}>
                                    <FontAwesome
                                        className="btn--collapse-sidebar-responsive__icon"
                                        src={Bars}
                                        width="20px"
                                        height="20px"
                                        alt="Button collapse sidebar responsive"
                                    />
                                </Button>
                            </div>
                            <div className="brand">        
                             <Link className="brand__link" to="/">
                                    <FontAwesome
                                        className="brand__logo"
                                        src={Logo}
                                        width="30px"
                                        height="30px"
                                        alt="Hope logo"
                                    />
                                    <span className="brand__name">
                                        Atrio
                                    </span>
                                </Link>
                            </div>
                            <div className="collapse-navbar">
                                <Button className="btn--collapse-navbar" onClick={this.toggleHeaderNavbar}>
                                    <FontAwesome 
                                        className="btn--collapse-navbar__icon"
                                        src={BtnCollapseNavbar}
                                        width="20px"
                                        height="20px"
                                        alt="Button collapse navbar"
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="header-navbar" id="header-navbar" ref={this.headerNavbar}>
                        <div className="header-navbar-container">
                            <div className="collapse">
                                {this.renderCollapseBtn()}
                            </div>
                            <ul className="menu">
                                <li className="menu__item">
                                    <a className="menu__link">
                                    <span className="menu__icon">
                                        <FontAwesome 
                                            className="menu__icon" 
                                            src={Bell} 
                                            width="23px" 
                                            height="23px" 
                                            alt="Bell icon"
                                        />
                                    </span>
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link">
                                        <span className="menu__icon">
                                            <FontAwesome 
                                                src={Cart} 
                                                width="23px" 
                                                height="23px" 
                                                alt="Cart icon"
                                            />
                                        </span>
                                    </a>
                                    </li>
                                <li className="menu__item">
                                    <a className="menu__link">
                                        <span className="menu__avatar" onClick={this.toggleSubMenu}>
                                            <img src={DefaultUserFemale} />
                                        </span>
                                    </a>
                                    
                                    <ul className={`submenu`} ref={this.headerNavbarSubmenu}>
                                        <li className="submenu__item">
                                            <a href="#" className="submenu__link">
                                                <span className="submenu__icon">
                                                    <FontAwesome 
                                                        src={Profile} 
                                                        width="20px" 
                                                        height="20px" 
                                                        alt="Cart icon"
                                                    />
                                                </span>
                                                <span className="submenu__text">Your Profile</span>
                                            </a>
                                        </li>
                                        <li className="submenu__item">
                                            <a href="#" className="submenu__link">
                                                <span className="submenu__icon">
                                                    <FontAwesome 
                                                        src={Account} 
                                                        width="20px" 
                                                        height="20px" 
                                                        alt="Cart icon"
                                                    />
                                                </span>
                                                <span className="submenu__text">Your Account</span>
                                            </a>
                                        </li>
                                        <li className="submenu__item">
                                            <a href="#" className="submenu__link">
                                                <span className="submenu__icon">
                                                        <FontAwesome 
                                                            src={Cog} 
                                                            width="20px" 
                                                            height="20px" 
                                                            alt="Cart icon"
                                                        />
                                                    </span>
                                                <span className="submenu__text">Setting</span>
                                            </a>
                                        </li>
                                    </ul>
        
                                </li>
                            </ul>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        stateOfModalPopupReducers: state.ModalPopupReducers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      openPopup: (payload) => dispatch(ModalPopupActions.openPopup(payload)),
      hidePopup: (payload) => dispatch(ModalPopupActions.hidePopup(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);