import React, { Component } from 'react';
import "./TabPane.scss"
import Proptypes from "prop-types";

class TabPane extends Component {
    render() {
        const { children, isActiveTab, className } = this.props;
        return (
            isActiveTab ? (
                <div className={`tabpane ${className}`}>
                    {children}
                </div>
            ) : null
        );
    }
}

TabPane.defaultProps = {
    isActiveTab: false,
    className: ""
}

TabPane.propsTypes = {
    isActiveTab: Proptypes.bool.isRequired,
    children: Proptypes.any.isRequired,
    className: Proptypes.string
}

export default TabPane;