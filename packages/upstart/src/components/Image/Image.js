import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({src, alt, title}) => {
  return (
    <img src={src} alt={alt} title={title} />
  )
}

export const ImageProps = {
  /** The source path of the image */
  src: PropTypes.string.isRequired,
  /** The alternative text for the image */
  alt: PropTypes.string.isRequired,
  /** An optional title for the image */
  title: PropTypes.string,
}

Image.propTypes = {...ImageProps};