import React from 'react';
import PropTypes from 'prop-types';


import { StyledCaption, StyledFigure, StyledImage } from './styled';

export const Image = ({
  src, alt, title, caption, className,
}) => (
  <StyledFigure className={className}>
    <StyledImage
      src={src}
      alt={alt}
      title={title}
      className={className && `${className} ${className}-image`}
    />
    {
      caption && (
        <StyledCaption className={className && `${className} ${className}-caption`}>
          {caption}
        </StyledCaption>
      )
      }
  </StyledFigure>
);

Image.propTypes = {

  /** An optional caption to be rendered on top of the image */
  caption: PropTypes.string,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The source path of the image */
  src: PropTypes.string.isRequired,

  /** The alternative text for the image */
  alt: PropTypes.string.isRequired,

  /** An optional title for the image */
  title: PropTypes.string,
};

Image.defaultProps = {
  caption: null,
  className: null,
  title: null,
};

export default Image;
