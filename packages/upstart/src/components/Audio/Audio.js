import React from 'react';
import PropTypes from 'prop-types';

export const Audio = ({
  shouldAutoplay, hideControls, shouldLoop, className, src, children,
}) => {
  const useSrc = src && !children;
  return (
    <audio
      autoPlay={shouldAutoplay}
      className={className}
      controls={!hideControls}
      loop={shouldLoop}
      src={useSrc && src}
    >
      {children}
      <p>Sorry, your browser doesn&apos;t support the audio element</p>
    </audio>
  );
};

Audio.propTypes = {

  /**
   * The content of the Audio component. Should be a <source> element or React
   * component that ultimately resolves in a <source> element
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]),

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** Whether or not the controls should be hidden */
  hideControls: PropTypes.bool,

  /** Whether or not the audio should play automatically */
  shouldAutoplay: PropTypes.bool,

  /** Whether or not the audio file should be looped */
  shouldLoop: PropTypes.bool,

  /** A path to a single source. Is ignored if children are passed in, as well. */
  src: PropTypes.string,
};

Audio.defaultProps = {
  children: null,
  className: null,
  hideControls: false,
  shouldAutoplay: false,
  shouldLoop: false,
  src: null,
};

export default Audio;
