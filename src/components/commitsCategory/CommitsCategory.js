import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { sprintCommitsCategory as types } from 'src/constants/constants';

import './style.css';

const CommitsCategory = props => {
  const { className, type, title, value, diff } = props;
  return (
    <div className={cn('commits-category', className)}>
      <div
        className={cn(
          'commits-category__marker',
          `commits-category__marker_type_${type}`
        )}
      />
      <div className='commits-category__title'>{title}</div>
      <div className='commits-category__stats'>
        <span className='commits-category__diff'>{diff}</span>
        <span className='commits-category__value'>{value}</span>
      </div>
    </div>
  );
};

CommitsCategory.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([types.s, types.m, types.l, types.xl]),
  title: PropTypes.string,
  value: PropTypes.string,
  diff: PropTypes.string,
};

CommitsCategory.defaultProps = {
  className: '',
  type: types.s,
  title: '',
  value: '',
  diff: '',
};

export default CommitsCategory;
