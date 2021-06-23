import React from "react";
import PropsTypes from "prop-types";
import "./Input.scss";

const Input = React.forwardRef(
  (
    { type, name, value, onChange, className, placeholder, defaultChecked, onFocus, onBlur },
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
  defaultChecked: PropsTypes.string
};

export default Input;
