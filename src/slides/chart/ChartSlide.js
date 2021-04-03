import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import SlideLayout from 'src/templates/slideLayout/SlideLayout';
import Bar from 'src/components/bar/Bar';
import UserCard from 'src/components/userCard/UserCard';

import { userCardSizes } from 'src/constants/constants';

import './style.css';

const getUpperBound = num => {
  const pow = num.toString().length - 1;
  return Math.ceil(num / 10 ** pow) * 10 ** pow;
};

const ChartSlide = props => {
  const { title, subtitle, values, users } = props;

  const max = values.reduce((acc, cur) => (acc > cur.value ? acc : cur.value));
  const upperBound = getUpperBound(max);

  const renderedBars = values
    .reverse()
    .slice(3, values.length - 4)
    .map((bar, index) => (
      <Bar
        className={cn('chart__bar', {
          chart__bar_active: bar.active,
        })}
        key={`${title}_${index}`}
        value={{
          text: bar.value,
          percentage: ((bar.value / upperBound) * 70).toFixed(2),
        }}
        description={bar.title}
      />
    ));

  const renderLeaders = users
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
        <div className='chart__leaders'>{renderLeaders}</div>
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
      id: PropTypes.number,
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
