import React from 'react';
import PropTypes from 'prop-types';

import SlideLayout from 'src/templates/slideLayout/SlideLayout';
import UserCard from 'src/components/userCard/UserCard';
import PrizePodiumColumn from 'src/components/prizePodiumColumn/PrizePodiumColumn';

import { voteEmoji } from 'src/constants/constants';

import './style.css';

const LeadersSlide = props => {
  const { title, subtitle, emoji, users, selectedUserId } = props;

  const renderedUsers = users.slice(0, 5).map((user, index) => {
    let userEmoji = null;
    if (index === 0) {
      userEmoji = emoji;
    } else {
      if (user.id === selectedUserId) {
        userEmoji = voteEmoji;
      }
    }
    return (
      <div
        className={`leaders__user leaders__user_place_${index + 1}`}
        key={`leaders_user_${index}`}
      >
        <UserCard
          className='leaders__user-info'
          user={user}
          emoji={userEmoji}
        />
        <PrizePodiumColumn place={index + 1} isWinner={index === 0} />
      </div>
    );
  });
  return (
    <SlideLayout title={title} subtitle={subtitle}>
      <div className='leaders'>{renderedUsers}</div>
    </SlideLayout>
  );
};

LeadersSlide.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  selectedUserId: PropTypes.number,
  emoji: PropTypes.string,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string,
      valueText: PropTypes.string,
    })
  ),
};

LeadersSlide.defaultProps = {
  title: '',
  subtitle: '',
  selectedUserId: 0,
  emoji: '',
  users: [],
};

export default LeadersSlide;
