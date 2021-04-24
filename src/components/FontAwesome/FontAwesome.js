import React from "react";
import PropsTypes from "prop-types";

const FontAwesome = (props) => {
  return (
    <img
      src={props.src}
      className={props.className}
      width={props.width}
      height={props.height}
      alt={props.alt || "Unvalid images."}
    />
  );
};

FontAwesome.propsTypes = {
  src: PropsTypes.string.isRequired,
  className: PropsTypes.string,
  width: PropsTypes.string.isRequired,
  height: PropsTypes.string.isRequired,
  alt: PropsTypes.string
};

export default FontAwesome;
