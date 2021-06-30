import React, { Component } from 'react';
import "./Tabs.scss";

import Proptypes from "prop-types";
import Button from "../Button/Button";

class Tabs extends Component {

    renderTabItem = (tabItem) => {
        if(tabItem.length > 0){
            const { activeClass, activeTab } = this.props;
            return tabItem.map((item) => (
                <li 
                    className="tab"
                    onClick={() => this.getKey(item.key)} 
                    key={item.key}
                >
                    <Button 
                        type="text" 
                        className={`${activeTab === item.key ? activeClass : ""}`} 
                    >
                        {item.label}
                    </Button>
                </li>
            ))
        }
        return null
    }

    getKey = (key) => {
        this.props.onClick(key);
    }

    render() {
        const { tabItem } = this.props;
        return (
            <ul className="tabs">
                {this.renderTabItem(tabItem)}
            </ul>
        );
    }
}

Tabs.defaultProps = {
    tabClassName: "",
    activeClass: ""
}

Tabs.propsTypes = {
    onClick: Proptypes.func.isRequired,
    tabItem: Proptypes.array.isRequired,
    tabClassName: Proptypes.string,
    activeClass: Proptypes.string,
    activeTab: Proptypes.string
}

export default Tabs;