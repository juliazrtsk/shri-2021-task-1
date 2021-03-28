import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Avatar from 'src/components/avatar/Avatar';
import Emoji from 'src/components/emoji/Emoji';

import './style.css';

const UserCard = props => {
  const { className, user, emoji, showDetails } = props;

  const [avatar, setAvatar] = useState(null);

  // Todo: fix hook calling
  useEffect(() => {
    import(`~images/2x/${user.avatar}`).then(res => {
      setAvatar(res.default);
    });
  }, [user.avatar]);

  return (
    <div className={`user-card ${className}`}>
      {emoji && <Emoji className='user-card__emoji' symbol={emoji} />}
      <Avatar className='user-card__avatar' src={avatar} alt={avatar} />
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
};

UserCard.defaultProps = {
  className: '',
  emoji: '',
  showDetails: true,
};

export default UserCard;
