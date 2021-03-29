import ReactDOMServer from 'react-dom/server';

import LeadersSlide from 'src/slides/leaders/LeadersSlide';
import VoteSlide from 'src/slides/vote/VoteSlide';
import ChartSlide from 'src/slides/chart/ChartSlide';
import Diagram from 'src/slides/diagram/Diagram';
import Activity from 'src/slides/activity/Activity';

import { aliases } from 'src/constants/constants';

const slideMap = {
  [aliases.leaders]: data => LeadersSlide(data),
  [aliases.vote]: data => VoteSlide(data),
  [aliases.chart]: data => ChartSlide(data),
  [aliases.diagram]: data => Diagram(data),
  [aliases.activity]: data => Activity(data),
};

window.renderTemplate = renderTemplate;

function renderTemplate(alias, data) {
  if (!aliases[alias]) {
    console.error('Incorrect data. Alias not found');
    return;
  }
  const renderSlide = slideMap[alias];
  const slide = renderSlide(data);
  return ReactDOMServer.renderToString(slide);
}

export default renderTemplate;
