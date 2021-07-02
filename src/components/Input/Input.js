import React from "react";
import "./Input.scss";

import classNames from "classnames";
import PropsTypes from "prop-types";

import FontAwesome from "../FontAwesome/FontAwesome";

import EyeSlash from "../../assets/images/svg/eye-slash.svg";
import Eye from "../../assets/images/svg/eye.svg";


const InputGroup = ({ children, className, ...props }) => (
  <div
    className={classNames({
      "input-group": true,
      [className]: className,
    })}
  >
    {children}
  </div>
);

const InputError = ({text}) => (
  <span className="input-error">
    {text}
  </span>
)

const CheckBox = ({className, label, ...props}) => (
  <div 
    className={classNames({
      "checkbox-group": true,
      [className]: className,
    })}
  >
    <label>
        {label}
        <Input 
          {...props}
        />
        <span className="checkmark"></span>
    </label>
  </div>
)

const ShowPasswordIcon = ({handleShowPassword, isShowPassword}) => (
  <div className="show-password" onClick={handleShowPassword}>
    <FontAwesome  
      width="20px"
      height="20px"
      alt={"Show password"}
      src={isShowPassword ? EyeSlash : Eye}
      />
  </div>
)

const InputWithBorder = ({label, children, inputRef, ...props}) => (
  <div 
    className="input-with-border"
  >
    <Input ref={inputRef} {...props} />
    <label>{label}</label>
    <div className="border"></div>
    {children}
  </div>
);

const Input = React.forwardRef(
  (
    {type, name, value, onChange, className, placeholder, defaultChecked, autoComplete, onFocus, onBlur },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={className}
        placeholder={placeholder}
        defaultChecked={defaultChecked}
        autoComplete={autoComplete}
      />
    );
  }
);

Input.defaultProps = {
  // ref: null,
  onChange: null,
  name: null,
  type: "text",
  className: "form-control",
  placeholder: null,
};

Input.propsTypes = {
  // ref: PropsTypes.any,
  onChange: PropsTypes.func.isRequired,
  onFocus: PropsTypes.func,
  onBlur: PropsTypes.func,
  name: PropsTypes.string.isRequired,
  type: PropsTypes.string.isRequired,
  value: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
  className: PropsTypes.string,
  placeholder: PropsTypes.string,
  defaultChecked: PropsTypes.string,
  autoComplete: PropsTypes.string
};

const exportedObject  = {
    Input,
    CheckBox,
    InputGroup,
    InputError,
    InputWithBorder,
    ShowPasswordIcon
}

export default exportedObject;
