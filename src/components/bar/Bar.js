import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.css';

const Bar = props => {
  const { className, value, description } = props;
  return (
    <div className={cn('bar', className)}>
      <div className='bar__value'>{value}</div>
      <div className='bar__column' />
      <div className='bar__description'>{description}</div>
    </div>
  );
};

Bar.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  description: PropTypes.string,
};

Bar.defaultProps = {
  className: '',
  value: 0,
  description: '',
};

export default Bar;
