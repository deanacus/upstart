import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({
  shouldAutoplay, hideControls, shouldLoop, className, children,
}) => (
  <audio
    autoPlay={shouldAutoplay}
    className={className}
    controls={hideControls}
    loop={shouldLoop}
  >
    {children}
    <p>Sorry, your browser doesn&apos;t support embedded audio</p>
  </audio>
);

Audio.propTypes = {

  /** Whether or not the audio should play automatically */
  shouldAutoplay: PropTypes.bool,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** Whether or not the controls should be hidden */
  hideControls: PropTypes.bool,

  /** Whether or not the audio file should be looped */
  shouldLoop: PropTypes.bool,

  /**
   * The content of the Audio component. Should be a <source> element or React
   * component that ultimately resolves in a <source> element
   */
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
};

Audio.defaultProps = {
  shouldAutoplay: false,
  className: null,
  hideControls: false,
  shouldLoop: false,
};

export default Audio;
