import React from "react";
import { PropTypes } from "prop-types";

const Image = (props) => {
  const { className, src, alt } = props;

  return <img className={className} src={src} alt={alt} />;
};

Image.defaultProps = {
  className: null,
  src: null,
  alt: null,
};

const { string } = PropTypes;

Image.propTypes = {
  className: string,
  src: string,
  alt: string,
};

export default Image;
