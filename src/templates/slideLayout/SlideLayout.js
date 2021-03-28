import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SlideLayout = props => {
  const { className, title, subtitle, children } = props;
  return (
    <div className={`slide ${className}`}>
      <div className='slide__header'>
        <h1 className='slide__title'>{title}</h1>
        <h3 className='slide__subtitle'>{subtitle}</h3>
      </div>
      <div className='slide__content'>{children}</div>
    </div>
  );
};

SlideLayout.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

SlideLayout.defaultProps = {
  className: '',
  title: '',
  subtitle: '',
  children: {},
};

export default SlideLayout;
