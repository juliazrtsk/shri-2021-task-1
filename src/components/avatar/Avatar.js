import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Avatar = props => {
  const { className, src, alt } = props;
  return (
    <img
      className={`avatar ${className}`}
      alt={alt}
      srcSet={`./images/1x/${src} 1x,
               ./images/2x/${src} 2x,
               ./images/3x/${src} 3x,
               ./images/4x/${src} 4x`}
    />
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
  src: '',
  alt: 'avatar',
};

export default Avatar;
