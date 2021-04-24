import React from 'react';
import { Link } from "react-router-dom";
import FontAwesome from "../FontAwesome/FontAwesome";

const { useImperativeHandle } = React;

const SubMenu = ({subMenu}) => {
    return <ul className="submenu">{
        subMenu.map((item, index) => (
            <li className="submenu__item" key={index}>
                <a href="#" className="submenu__link">
                    <span className="submenu__text">{item.text}</span>
                </a>
            </li>
        ))
    }</ul>
}

const toggleSubMenuFunc = (isCollapse) => {
    console.log(isCollapse)
}

const Menu = ({menu, isCollapse}) => {
    return menu.map((item, index) => {
        // const toggleSubMenu = item.func && toggleSubMenuFunc(isCollapse);
                return <li className="menu__item" key={index}>
                    <Link 
                        // href="#"
                        to={item.link}
                        className="menu__link" 
                        onClick={() => toggleSubMenuFunc(isCollapse)}
                        // className={item.collapse ?  `menu__link ${collapseIcon}` : "menu__link" }
                    >
                        <span className="menu__icon">
                            <FontAwesome src={item.icon} width="23px" height="23px" alt={item.icon_name} />
                        </span>
                        <span className="menu__text">
                            {item.text}
                        </span>
                    </Link>
                    {item.subMenu && <SubMenu subMenu={item.subMenu} /> }
                    

                    {/*
                        {item.subMenu && <ul className={`submenu ${this.state.collapseClassName}`}>{this.renderSubMenu(subMenuData)}</ul>}
                    */}
                </li>
            })
}
const SideNavbar = React.forwardRef(({menu, isCollapse}, ref) => {

    // const getAleart = () => alert("hi");

    useImperativeHandle(ref, () => ({

        getAleart() {
          alert("getAlert from Child");
        }
    
      }));
    // const collapseIcon = this.state.isCollaspe ? "menu__icon--collapse-minus": "menu__icon--collapse-plus";
    return <ul className="menu"><Menu menu={menu} isCollapse={isCollapse}/></ul>
});

export default SideNavbar;