import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import SlideLayout from 'src/templates/slideLayout/SlideLayout';
import UserCard from 'src/components/userCard/UserCard';
import PrizePodiumColumn from 'src/components/prizePodiumColumn/PrizePodiumColumn';

import { voteEmoji } from 'src/constants/constants';

import './style.css';

const LeadersSlide = props => {
  const { title, subtitle, emoji, users, selectedUserId } = props;

  let selectedUserIndex = null;
  const selectedUser = !selectedUserId
    ? {}
    : users.filter((user, index) => {
        const isUserSelected = user.id === selectedUserId;
        if (isUserSelected) {
          selectedUserIndex = index;
        }
        return isUserSelected;
      })[0];

  const leadingUsers = users
    .slice(0, 5)
    .map((user, index) => ({ ...user, place: index + 1 }));

  const leaders =
    selectedUserIndex <= 4
      ? leadingUsers
      : [
          ...leadingUsers.slice(0, 4),
          { ...selectedUser, place: selectedUserIndex + 1 },
        ];

  const renderedSelectedUser = selectedUserId && (
    <div className='leaders__selected-user'>
      <UserCard
        className={cn('leaders__user-info', 'leaders__selected-user-info')}
        user={selectedUser}
        emoji={voteEmoji}
      />
      <div className='leaders__selected-user-place'>
        {selectedUserIndex + 1}
      </div>
    </div>
  );

  const renderedUsers = leaders.map((user, index) => {
    const { id, place } = user;
    const isWinner = index === 0;
    const isSelectedUser = id === selectedUserId;

    let userEmoji = null;
    if (isWinner) {
      userEmoji = emoji;
    } else {
      if (isSelectedUser) {
        userEmoji = voteEmoji;
      }
    }
    return (
      <div
        className={`leaders__user leaders__user_place_${index + 1}`}
        key={`leaders_user_${place}`}
      >
        <UserCard
          className='leaders__user-info'
          user={user}
          emoji={userEmoji}
        />
        <PrizePodiumColumn place={place} isWinner={isWinner} />
        {isWinner &&
          !isSelectedUser &&
          selectedUserIndex > 2 &&
          renderedSelectedUser}
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
      id: PropTypes.number,
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
