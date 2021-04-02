import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.css';

const Bar = props => {
  const { className, value, description } = props;
  return (
    <div className={cn('bar', className)}>
      <div className='bar__value'>{value.text || ''}</div>
      <div className='bar__column' style={{ height: `${value.percentage}%` }} />
      <div className='bar__description'>{description}</div>
    </div>
  );
};

Bar.propTypes = {
  className: PropTypes.string,
  value: PropTypes.shape({
    text: PropTypes.node,
    percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  description: PropTypes.string,
};

Bar.defaultProps = {
  className: '',
  value: {
    text: 0,
    percentage: 0,
  },
  description: '',
};

export default Bar;
