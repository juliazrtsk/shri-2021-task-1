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
  const { title, subtitle, users } = props;

  const renderedUsers = users.slice(0, 6).map((
    user,
    index // Todo: use offset?
  ) => (
    <UserCard
      className={cn('vote__user', {
        vote__user_selected: user.id === 4, // Todo: make it only for selected user
      })}
      key={`vote_user_${index}`}
      user={user}
      emoji={user.id === 4 && voteEmoji} // Todo: make it only for selected user
      showDetails={false}
    />
  ));

  const renderButton = dir => (
    <ArrowButton
      className={`vote__button vote__button_${dir}`}
      direction={dir}
    />
  );

  return (
    <SlideLayout title={title} subtitle={subtitle}>
      <div className='vote'>
        {renderButton(directions.up)}
        {renderedUsers}
        {renderButton(directions.down)}
      </div>
    </SlideLayout>
  );
};

VoteSlide.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  offset: PropTypes.number,
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
  emoji: '',
  users: [],
};

export default VoteSlide;
