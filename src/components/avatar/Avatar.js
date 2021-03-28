import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Avatar = (props) => {
  const { className, src, alt } = props;
  return (
    <img
      className={`avatar ${className}`}
      src={src}
      alt={alt}
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
