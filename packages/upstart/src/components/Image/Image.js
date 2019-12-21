import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

const StyledFigure = styled.figure`
  margin: 0;
  position: relative;
`;

const StyledImage = styled.img`
  max-width: 100%;
`;

const StyledCaption = styled.figcaption`
  bottom: ${({theme}) => theme.space[2] / 10 }rem;
  left: ${({theme}) => theme.space[2] / 10 }rem;
  position: absolute;
`;

export const Image = ({src, alt, title, caption}) => {
  return (
    <ThemeProvider>
      <StyledFigure>
        <StyledImage src={src} alt={alt} title={title} />
        { caption && <StyledCaption>{caption}</StyledCaption>}
      </StyledFigure>
    </ThemeProvider>
  )
}

Image.propTypes = {
  /** The source path of the image */
  src: PropTypes.string.isRequired,
  /** The alternative text for the image */
  alt: PropTypes.string.isRequired,
  /** An optional title for the image */
  title: PropTypes.string,
  /** An optional caption to be rendered on top of the image */
  caption: PropTypes.string,
}

Image.defaultProps = {
  title: null,
  caption: null,
}