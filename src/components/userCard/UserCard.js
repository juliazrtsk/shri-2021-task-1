import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'src/components/avatar/Avatar';
import Emoji from 'src/components/emoji/Emoji';

import { userCardSizes } from 'src/constants/constants';

import './style.css';

const UserCard = props => {
  const { className, user, emoji, showDetails, size } = props;

  return (
    <div className={`user-card user-card_size_${size} ${className}`}>
      {emoji && <Emoji className='user-card__emoji' symbol={emoji} />}
      <Avatar
        className='user-card__avatar'
        src={user.avatar}
        alt={`avatar ${user.name}`}
      />
      <div className='user-card__name'>{user.name}</div>
      {showDetails && <div className='user-card__text'>{user.valueText}</div>}
    </div>
  );
};

UserCard.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    avatar: PropTypes.string,
    valueText: PropTypes.string,
  }).isRequired,
  emoji: PropTypes.string,
  showDetails: PropTypes.bool,
  size: PropTypes.oneOf([userCardSizes.m, userCardSizes.s]),
};

UserCard.defaultProps = {
  className: '',
  emoji: '',
  showDetails: true,
  size: userCardSizes.m,
};

export default UserCard;
