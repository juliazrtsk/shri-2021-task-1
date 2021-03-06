import { renderTemplate } from './template/templateRenderer';

import 'normalize.css';
import './_variables.css';
import './index.css';

import * as data from '../data/data.json';

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const slide = params.get('slide') || 1;
  const theme = params.get('theme') || 'light';
  console.log(`slide: ${slide}; theme: ${theme}`);
  console.log(data[slide - 1]);

  const slideData = data[slide - 1];
  const slideRendered = renderTemplate(slideData.alias, slideData.data);
  const root = document.getElementById('root');
  root.insertAdjacentHTML('beforeend', slideRendered);
}
