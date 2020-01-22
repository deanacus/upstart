import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledCaption, StyledFigure, StyledImage } from './styled';

export const Image = ({
  src, alt, title, caption, className,
}) => (
  <ThemeProvider>
    <StyledFigure className={className}>
      <StyledImage src={src} alt={alt} title={title} className={className && `${className} ${className}-image`} />
      { caption && <StyledCaption className={className && `${className} ${className}-caption`}>{caption}</StyledCaption>}
    </StyledFigure>
  </ThemeProvider>
);

Image.propTypes = {
  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,
  /** The source path of the image */
  src: PropTypes.string.isRequired,
  /** The alternative text for the image */
  alt: PropTypes.string.isRequired,
  /** An optional title for the image */
  title: PropTypes.string,
  /** An optional caption to be rendered on top of the image */
  caption: PropTypes.string,
};

Image.defaultProps = {
  className: null,
  title: null,
  caption: null,
};

export default Image;
