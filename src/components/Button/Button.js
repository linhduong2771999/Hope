import React from 'react';
import PropsTypes from "prop-types";
import "./Button.scss"

const Button = ({type, onClick, className, children}) => {
    return (
        <button type={type} onClick={onClick} className={className}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    onClick: null,
    type: "text",
    className: "btn-default"
}

Button.propsTypes = {
    onClick: PropsTypes.func.isRequired,
    type: PropsTypes.string.isRequired,
    className: PropsTypes.string

}
export default Button;