import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// action
import { ModalPopupActions } from "../../../store/actions/index";
// component
import FontAwesome from "../../../components/FontAwesome/FontAwesome";
import HomeFont from "../../../assets/images/svg/home.svg";
import ShoppingBasket from "../../../assets/images/svg/shopping-basket.svg";
import NewsPaper from "../../../assets/images/svg/newspaper.svg";
import UserCog from "../../../assets/images/svg/user-cog.svg";
import GamePad from "../../../assets/images/svg/gamepad.svg";
import Logo from "../../../assets/images/common/logo.png";

import { setLocalStorage, getLocalStorage } from "../../../helpers/localStorage";
const listOfMenu = [
  {
    key: "menu0",
    link: "/",
    icon: HomeFont,
    icon_name: "Home icon",
    text: "Home",
  },
  {
    key: "submenu",
    link: "#",
    icon: ShoppingBasket,
    icon_name: "Shopping icon",
    text: "E-commerce",
    subMenu: [
      { key: "submenu0", link: "/shopping/smartphone", text: "Smartphone - Ipad" },
      { key: "submenu1", link: "/shopping/electric", text: "Electric" },
      { key: "submenu2", link: "/shopping/fashion", text: "Fashion - Accessories" },
      { key: "submenu3", link: "/shopping/laptop", text: "Laptop - IT devices" },
      { key: "submenu4", link: "/shopping/decorations", text: "Decorations - Pretties" },
    ],
    func: true,
  },
  {
    key: "menu2",
    link: "/newsfeed",
    icon: NewsPaper,
    icon_name: "Newsfeed icon",
    text: "Newsfeed",
  },
  {
    key: "menu3",
    link: "/game",
    icon: GamePad,
    icon_name: "Game icon",
    text: "Games",
  },
  {
    key: "menu4",
    link: "/user_management",
    icon: UserCog,
    icon_name: "User icon",
    text: "Management",
  },
];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapse: false,
      collapseClassName: "",
      selectedLinkIndex: "",
    };

    this.sidebarNavbar = React.createRef();
  } 

  componentDidMount = () => {
      const selectedLinkIndex = getLocalStorage("sidebar-menu-item-selected") || "";
      if(selectedLinkIndex !== undefined && selectedLinkIndex.startsWith("submenu")) this.toggleSubmenu();
      this.props.openPopup({popupName: "collapseSideNavbar", popupProps: null});
  }

  toggleSubmenu = () => {
    this.setState(
      {
        isCollapse: !this.state.isCollapse,
      },
      () => this.triggerSubmenuAnimate(this.state.isCollapse)
    );
  };

  triggerSubmenuAnimate = (isCollapse) => {
    let collapseClassName = "submenu--slide-up";
    if (isCollapse) collapseClassName = "submenu--slide-down";
    this.setState({
      collapseClassName,
    });
  };

  onSelectedLink = (payload) => {
    const { selectedLinkIndex } = payload;

    if (selectedLinkIndex === "submenu") this.toggleSubmenu();

    if(this.state.collapseClassName === "submenu--slide-down" && selectedLinkIndex.startsWith("menu")){
        this.toggleSubmenu()
    }
    this.setState({
      selectedLinkIndex,
    }, () => setLocalStorage("sidebar-menu-item-selected", selectedLinkIndex, {minutes: 30}));
  };

  renderSubMenu = (submenu) => {
    const { collapseClassName } = this.state;
    return (
      <ul className={`submenu ${collapseClassName}`}>
        {submenu.map((item, index) => {
            const activeLinkClassName = item.link === this.props.location.pathname && "active-link";
          return (
            <li className="submenu__item" key={index}>
              <Link
                to={item.link}
                className={`submenu__link ${activeLinkClassName}`}
                onClick={() => this.onSelectedLink({ selectedLinkIndex: item.key })}
              >
                <span className="submenu__text">{item.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  renderMenuItem = () => {
    const { isCollapse, selectedLinkIndex } = this.state;
    return listOfMenu.map((item, index) => {

      const activeLinkClassName = item.link === this.props.location.pathname ? "active-link" : "";
      const selectedLinkClassName = item.key === selectedLinkIndex ? "selected-link" : "";
      const collapseIconClassName = isCollapse
        ? "menu__icon--collapse-minus"
        : "menu__icon--collapse-plus";
      const showCollapseIcon = item.subMenu ? collapseIconClassName : "";

        return (
          <li className="menu__item" key={index}>
            <Link
              to={item.link}
              className="menu__link"
              onClick={() =>
                this.onSelectedLink({
                  selectedLinkIndex: item.key,
                })
              }
              className={`menu__link ${selectedLinkClassName} ${showCollapseIcon} ${activeLinkClassName}`}
            >
              <span className="menu__icon">
                <FontAwesome
                  src={item.icon}
                  width="23px"
                  height="23px"
                  alt={item.icon_name}
                />
              </span>
              <span className="menu__text">{item.text}</span>
             </Link>
            {item.subMenu && this.renderSubMenu(item.subMenu)}
          </li> 
        );
    });
  };

  renderMenu = () => <ul className="menu">{this.renderMenuItem()}</ul>;
  
  toggleSidebarResponsive = () => {
    if(this.sidebarNavbar.current.style.marginLeft === "0px"){
      this.sidebarNavbar.current.style.marginLeft = "-270px";
  } else {
      this.sidebarNavbar.current.style.marginLeft = "0";
  }
  }
  render() {
    const {isOpen} = this.props.stateOfModalPopupReducers;
    // const stretchClassName = isOpen ? "sidebar--stretch" : "sidebar--shrink";
    return (
      <div className={`sidebar`} id="sidebar" ref={this.sidebarNavbar}>
        <div className="sidebar-wrap">
          <div className="sidebar-header">
            
          </div>
          <div className="sidebar-main">
            <div className="profile">
              <div className="profile__img"></div>
              <div className="profile__info"></div>
            </div>
            {this.renderMenu()}
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

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef : true})(Sidebar);
