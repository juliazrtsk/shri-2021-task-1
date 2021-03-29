import React, { useState, useEffect } from 'react';

import renderTemplate from './templates/templateRenderer';
import { getSettings } from 'src/utils/getSettings';

import { themes } from 'src/constants/constants';

const App = () => {
  const { slide, theme } = getSettings();

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
  }, [slidesData, slide]);

  return (
    <div
      className={`stories ${themes[theme] || themes.dark}`}
      dangerouslySetInnerHTML={{ __html: slideMarkup }}
    />
  );
};

export default App;
