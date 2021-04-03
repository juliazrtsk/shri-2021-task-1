import React, { useState, useEffect } from 'react';

import renderTemplate from 'src/templates/templateRenderer';
import { getSettings } from 'src/utils/getSettings';

import { themes } from 'src/constants/constants';

const App = () => {
  const [slide, setSlide] = useState(1);
  const [theme, setTheme] = useState('light');
  const [slidesData, setSlidesData] = useState(null);
  const [slideMarkup, setSlideMarkup] = useState(null);

  useEffect(() => {
    const settings = getSettings();
    setSlide(settings.slide);
    setTheme(settings.theme);

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
