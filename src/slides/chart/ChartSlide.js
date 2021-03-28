import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import SlideLayout from 'src/templates/slideLayout/SlideLayout';
import Bar from 'src/components/bar/Bar';
import UserCard from 'src/components/userCard/UserCard';

import { userCardSizes } from 'src/constants/constants';

import './style.css';

const ChartSlide = props => {
  const { title, subtitle, values, users } = props;

  // Todo: тут скорее надо определять в зависимости от размера экрана?
  const renderedBars = values.slice(3, values.length - 3).map((bar, index) => (
    <Bar
      className={cn('chart__bar', {
        chart__bar_active: bar.active,
      })}
      key={`${title}_${index}`}
      value={bar.value}
      description={bar.title}
    />
  ));

  const renderedLeaders = users
    .slice(0, 2)
    .map((user, index) => (
      <UserCard
        key={`chart_leader_${index}`}
        className='chart__user'
        user={user}
        size={userCardSizes.s}
        showDetails
      />
    ));

  return (
    <SlideLayout title={title} subtitle={subtitle}>
      <div className='chart'>
        <div className='chart__bars'>{renderedBars}</div>
        <div className='chart__leaders'>{renderedLeaders}</div>
      </div>
    </SlideLayout>
  );
};

ChartSlide.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number,
      active: PropTypes.bool,
    })
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string,
      valueText: PropTypes.string,
    })
  ),
};

ChartSlide.defaultProps = {
  title: '',
  subtitle: '',
  values: [],
  users: [],
};

export default ChartSlide;
