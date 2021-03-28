import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Emoji = (props) => {
  const { className, symbol } = props;
  return (
    <div className={`emoji ${className}`}>
      {symbol}
    </div>
  );
};

Emoji.propTypes = {
  className: PropTypes.string,
  symbol: PropTypes.string,
};

Emoji.defaultProps = {
  className: '',
  symbol: '',
};

export default Emoji;
