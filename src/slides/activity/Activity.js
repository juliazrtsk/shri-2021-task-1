import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import SlideLayout from 'src/templates/slideLayout/SlideLayout';
import { getScreenOrientation, getSettings } from 'src/utils/getSettings';

import './style.css';

const steps = {
  horizontal: 17,
  vertical: 13,
};

const commitLegendBounds = {
  min: [0],
  mid: [1, 2],
  max: [3, 4],
  extra: [5, 6],
};

const sumCommitsForTwoHours = hours => {
  let result = [];
  result = hours.reduce((acc, cur, index) => {
    if (index % 2 !== 0) {
      acc[acc.length - 1] += cur;
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
  return result;
};

const horizontalPreparation = data => {
  const days = Object.keys(data);
  return days.reduce((acc, day) => {
    return { ...acc, [day]: sumCommitsForTwoHours(data[day]) };
  }, {});
};

const splitDayOnTwoHalves = hours => {
  let firstHalf = [];
  let secondHalf = [];
  hours.forEach((hour, index) => {
    if (index % 2 === 0) {
      firstHalf.push(hour);
    } else {
      secondHalf.push(hour);
    }
  });
  return [firstHalf, secondHalf];
};

const verticalPreparation = data => {
  const days = Object.keys(data);
  return days.reduce((acc, day) => {
    const [first, second] = splitDayOnTwoHalves(data[day]);
    return {
      ...acc,
      [`${day}_1`]: first,
      [`${day}_2`]: second,
    };
  }, {});
};

const dataPreparators = {
  vertical: data => verticalPreparation(data),
  horizontal: data => horizontalPreparation(data),
};

const bars = {
  min_dark: './images/min-dark.svg',
  mid_dark: './images/mid-dark.svg',
  max_dark: './images/max-dark.svg',
  extra_dark: './images/extra-dark.svg',
  min_light: './images/min-light.svg',
  mid_light: './images/mid-light.svg',
  max_light: './images/max-light.svg',
  extra_light: './images/extra-light.svg',
};

const Activity = props => {
  const { title, subtitle, data } = props;

  const { theme } = getSettings();
  const orientation = getScreenOrientation();

  const renderedLegend = Object.keys(commitLegendBounds).map((key, index) => {
    const bounds = commitLegendBounds[key] || [];
    const value = bounds.length > 1 ? `${bounds[0]} — ${bounds[1]}` : bounds[0];
    return (
      <div className='activity__legend-item' key={`legend_${index}`}>
        <div
          className={cn(
            'activity__legend-marker',
            `activity__legend-marker_type_${key}`
          )}
        />
        <div className='activity__legend-value'>{value}</div>
      </div>
    );
  });

  const preparator = dataPreparators[orientation];

  const renderDayChain = day =>
    day.map((barValue, index) => {
      let type = '';
      if (commitLegendBounds.min.includes(barValue)) {
        type = 'min';
      }
      if (commitLegendBounds.mid.includes(barValue)) {
        type = 'mid';
      }
      if (commitLegendBounds.max.includes(barValue)) {
        type = 'max';
      }
      if (commitLegendBounds.extra.includes(barValue)) {
        type = 'extra';
      }
      return (
        <img
          key={`activity_bar_${index}`}
          className='activity__bar'
          src={bars[`${type}_${theme}`]}
          alt={type}
        />
      );
    });

  const preparedData = preparator(data);

  const getOffsetStyles = index => {
    if (orientation === 'horizontal') {
      return {
        top: `${steps.vertical * index}px`,
        left: index % 2 ? `${steps.horizontal}px` : 0,
      };
    }
    return {
      bottom: index % 2 ? `${steps.vertical}px` : 0,
      right: `${steps.horizontal * index}px`,
    };
  };
  const renderedBars = Object.keys(preparedData).map((day, index) => {
    return (
      <div
        className={cn('activity__day', `activity__day_${orientation}`)}
        key={`activity_day_${index}`}
        style={getOffsetStyles(index)}
      >
        {renderDayChain(preparedData[day])}
      </div>
    );
  });

  return (
    <SlideLayout title={title} subtitle={subtitle}>
      <div className='activity'>
        <div className='activity__chart'>{renderedBars}</div>
        <div className='activity__legend'>
          <div className='activity__legend-item'>
            <div
              className={cn(
                'activity__legend-marker',
                'activity__legend-marker_dimension'
              )}
            />
            <div className='activity__legend-value'>
              {orientation === 'horizontal' ? '2 часа' : '1 час'}
            </div>
          </div>
          {renderedLegend}
        </div>
      </div>
    </SlideLayout>
  );
};

Activity.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  data: PropTypes.shape({
    mon: PropTypes.arrayOf(PropTypes.number),
    tue: PropTypes.arrayOf(PropTypes.number),
    wed: PropTypes.arrayOf(PropTypes.number),
    thu: PropTypes.arrayOf(PropTypes.number),
    fri: PropTypes.arrayOf(PropTypes.number),
    sat: PropTypes.arrayOf(PropTypes.number),
    sun: PropTypes.arrayOf(PropTypes.number),
  }),
};

Activity.defaultProps = {
  title: '',
  subtitle: '',
  data: {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: [],
  },
};

export default Activity;
