import React from 'react';
import './GridLayout.scss';

const Row = ({children, className = ""}) => {
    return (
        <div className={`row ${className}`}>{children}</div>
    );
};

const Column = ({children, className = ""}) => {
    return (
        <div className={`column ${className}`}>{children}</div>
    );
};

const Col = ({col, pad = 0, mar = 0, className = "", children}) => {
    return (
        <div 
            className={`${className} col-${col} pad-${pad} mar-${mar}`}
        >{children}</div>
    );
};

export default {
    Column,
    Row,
    Col
};