import React from 'react';
import PropTypes from 'prop-types';

import SlideLayout from 'src/templates/slideLayout/SlideLayout';
import CommitsCategory from 'src/components/commitsCategory/CommitsCategory';

import { sprintCommitsCategory } from 'src/constants/constants';

import './style.css';

const Diagram = props => {
  const { title, subtitle, totalText, differenceText, categories } = props;
  const categoriesTypes = Object.values(sprintCommitsCategory);

  const renderedCategories = categories.map(
    ({ title, valueText, differenceText }, index) => {
      const value = valueText.split(' ')[0];
      const diff = differenceText.split(' ')[0];
      return (
        <CommitsCategory
          key={`diagram_cat_${index}`}
          className='diagram__category'
          type={categoriesTypes[index]}
          title={title}
          diff={diff}
          value={value}
        />
      );
    }
  );
  return (
    <SlideLayout title={title} subtitle={subtitle}>
      <div className='diagram'>
        <div className='diagram__round-chart'>
          <div className='diagram__total'>{totalText}</div>
          <div className='diagram__diff'>{differenceText}</div>
        </div>
        <div className='diagram__categories'>{renderedCategories}</div>
      </div>
    </SlideLayout>
  );
};

Diagram.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  totalText: PropTypes.string,
  differenceText: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      valueText: PropTypes.string,
      differenceText: PropTypes.string,
    })
  ),
};

Diagram.defaultProps = {
  title: '',
  subtitle: '',
  totalText: '',
  differenceText: '',
  categories: [],
};

export default Diagram;
