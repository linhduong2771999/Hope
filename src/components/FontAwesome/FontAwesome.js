import React from "react";
import PropsTypes from "prop-types";

import "./FontAwesome.scss";

const FontAwesome = ({src, className , color, width, height, alt}) => {
  return (
    <img
      src={src}
      className={`${className} ${color === "white" ? "default-font-white" : ""}`}
      width={width}
      height={height}
      alt={alt || "Unvalid images."}
    />
  );
};

FontAwesome.propsTypes = {
  src: PropsTypes.string.isRequired,
  className: PropsTypes.string,
  width: PropsTypes.string.isRequired,
  height: PropsTypes.string.isRequired,
  alt: PropsTypes.string,
  color: PropsTypes.string
};

export default FontAwesome;
