import { renderTemplate } from './template/templateRenderer';

import 'normalize.css';
import './_variables.css';
import './index.css';

import * as data from '../data/data.json';

const THEMES = {
  light: 'theme_light',
  dark: 'theme_dark',
};

window.renderTemplate = renderTemplate;

window.onload = async function () {
  const params = new URLSearchParams(window.location.search);
  const slide = params.get('slide') || 1;
  const theme = params.get('theme') || 'dark';
  console.log(`slide: ${slide}; theme: ${theme}`);
  console.log(data[slide - 1]);

  const root = document.getElementById('root');
  root.classList.add(THEMES[theme] || THEMES.dark);

  const slideData = data[slide - 1];
  const slideRendered = await window.renderTemplate(slideData.alias, slideData.data);
  root.insertAdjacentHTML('beforeend', slideRendered);
}
