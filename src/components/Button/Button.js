import React from 'react';
import PropsTypes from "prop-types";
import classNames from 'classnames';
import "./Button.scss"

const Button = ({type, onClick, className, sample, children}) => {
    const buttonClass = classNames({
        "btn-primary": sample === "btn-primary"
    })
    return (
        <button type={type} onClick={onClick} className={`${buttonClass} ${className}`}>
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