import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import SlideLayout from 'src/templates/slideLayout/SlideLayout';
import UserCard from 'src/components/userCard/UserCard';
import ArrowButton from 'src/components/arrowButton/ArrowButton';

import {
  arrowButtonDirections as directions,
  voteEmoji,
} from 'src/constants/constants';

import './style.css';

const VoteSlide = props => {
  const { title, subtitle, users, offset, selectedUserId } = props;

  let startIndex = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === offset) {
      startIndex = i;
      break;
    }
  }

  const renderedUsers = users
    .slice(startIndex, startIndex + 6)
    .map((user, index) => (
      <UserCard
        className={cn('vote__user', {
          vote__user_selected: user.id === selectedUserId,
        })}
        key={`vote_user_${index}`}
        user={user}
        emoji={user.id === selectedUserId && voteEmoji}
        showDetails={false}
        data-action='update'
        data-params={JSON.stringify({
          alias: 'leaders',
          data: { selectedUserId: user.id },
        })}
      />
    ));

  const renderButton = (dir, startUserId) => (
    <ArrowButton
      className={`vote__button vote__button_${dir}`}
      direction={dir}
      data-action='update'
      data-params={JSON.stringify({
        alias: 'vote',
        data: {
          offset: startUserId,
        },
      })}
    />
  );

  const getNewOffset = step => {
    let newIndex = startIndex + step;
    if (newIndex < 0) {
      newIndex = 0;
    }
    if (newIndex >= users.length) {
      newIndex = users.length - (users.length % 6);
    }
    return users[newIndex].id;
  };

  return (
    <SlideLayout title={title} subtitle={subtitle}>
      <div className='vote'>
        {renderButton(directions.up, getNewOffset(-6))}
        {renderedUsers}
        {renderButton(directions.down, getNewOffset(6))}
      </div>
    </SlideLayout>
  );
};

VoteSlide.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  offset: PropTypes.number,
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

VoteSlide.defaultProps = {
  title: '',
  subtitle: '',
  offset: 0,
  selectedUserId: 0,
  emoji: '',
  users: [],
};

export default VoteSlide;
