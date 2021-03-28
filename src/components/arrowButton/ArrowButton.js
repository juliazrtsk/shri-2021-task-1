import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { arrowButtonDirections as directions } from 'src/constants/constants';

import './style.css';

const ArrowButton = props => {
  const { className, direction, onClick, disabled } = props;
  return (
    <button
      className={cn(
        'arrow-button',
        `arrow-button__direction_${direction}`,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

ArrowButton.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ArrowButton.defaultProps = {
  className: '',
  direction: directions.up,
  onClick: () => {},
  disabled: false,
};

export default ArrowButton;
