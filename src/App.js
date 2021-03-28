import React, { useState, useEffect } from 'react';

import renderTemplate from './templates/templateRenderer';

import { themes } from 'src/constants/constants';

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const slide = params.get('slide') || 1;
  const theme = params.get('theme') || 'dark';

  const [slidesData, setSlidesData] = useState(null);
  const [slideMarkup, setSlideMarkup] = useState(null);

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setSlidesData(data));
  }, []);

  useEffect(() => {
    if (slidesData) {
      const { alias, data } = slidesData[slide - 1];
      const markup = renderTemplate(alias, data);
      setSlideMarkup(markup);
    }
  }, [slidesData]);

  return (
    <div
      className={`stories ${themes[theme] || themes.dark}`}
      dangerouslySetInnerHTML={{ __html: slideMarkup }}
    />
  );
};

export default App;
