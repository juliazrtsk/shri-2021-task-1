import ReactDOMServer from 'react-dom/server';

import LeadersSlide from 'src/slides/leaders/LeadersSlide';
import VoteSlide from 'src/slides/vote/VoteSlide';

import { aliases } from 'src/constants/constants';

const slideMap = {
  [aliases.leaders]: data => LeadersSlide(data),
  [aliases.vote]: data => VoteSlide(data),
  [aliases.chart]: () => {},
  [aliases.diagram]: () => {},
  [aliases.activity]: () => {},
};

window.renderTemplate = renderTemplate;

function renderTemplate(alias, data) {
  if (!aliases[alias]) {
    console.error('Not found');
    return;
  }
  const renderSlide = slideMap[alias];
  const slide = renderSlide(data);
  return ReactDOMServer.renderToString(slide);
}

export default renderTemplate;
