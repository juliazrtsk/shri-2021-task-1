import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.css';

const PrizePodiumColumn = props => {
  const { place, isWinner } = props;
  return (
    <div
      className={cn('prize-podium-column', {
        'prize-podium-column_winner': isWinner,
      })}
    >
      <div className='prize-podium-column__place'>{place}</div>
    </div>
  );
};

PrizePodiumColumn.propTypes = {
  place: PropTypes.number,
  isWinner: PropTypes.bool,
};

PrizePodiumColumn.defaultProps = {
  place: null,
  isWinner: false,
};

export default PrizePodiumColumn;
