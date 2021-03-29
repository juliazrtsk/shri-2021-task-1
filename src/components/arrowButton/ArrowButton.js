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
      data-action={props['data-action']}
      data-params={props['data-params']}
    />
  );
};

ArrowButton.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  'data-action': PropTypes.string,
  'data-params': PropTypes.string,
};

ArrowButton.defaultProps = {
  className: '',
  direction: directions.up,
  onClick: () => {},
  disabled: false,
  'data-action': '',
  'data-params': '',
};

export default ArrowButton;
