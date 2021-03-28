import React from 'react';
import PropTypes from 'prop-types';

import SlideLayout from 'src/templates/slideLayout/SlideLayout';
import UserCard from 'src/components/userCard/UserCard';

import './style.css';

const VoteSlide = (props) => {
  const { title, subtitle, offset, users, emoji } = props;

  const renderedUsers = users.map((user, index) => (
    <UserCard
      className="vote__user"
      key={`vote_user_${index}`}
      user={user}
      emoji={emoji}
    />
  ));
  return (
    <SlideLayout title={title} subtitle={subtitle}>
      <div className="vote">
        {renderedUsers}
      </div>
    </SlideLayout>
  );
};

VoteSlide.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  offset: PropTypes.number,
  emoji: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    valueText: PropTypes.string,
  })),
};

VoteSlide.defaultProps = {
  title: '',
  subtitle: '',
  offset: 0,
  emoji: '',
  users: [],
};

export default VoteSlide;
