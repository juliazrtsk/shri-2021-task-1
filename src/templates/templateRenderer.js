import React from 'react';
import ReactDOMServer from 'react-dom/server';

import LeadersSlide from 'src/slides/leaders/LeadersSlide';
import VoteSlide from 'src/slides/vote/VoteSlide';
import ChartSlide from 'src/slides/chart/ChartSlide';
import Diagram from 'src/slides/diagram/Diagram';
import Activity from 'src/slides/activity/Activity';

import { aliases } from 'src/constants/constants';

const slideMap = {
  [aliases.leaders]: LeadersSlide,
  [aliases.vote]: VoteSlide,
  [aliases.chart]: ChartSlide,
  [aliases.diagram]: Diagram,
  [aliases.activity]: Activity,
};

window.renderTemplate = renderTemplate;

function renderTemplate(alias, data) {
  if (!aliases[alias]) {
    console.error('Incorrect data. Alias not found');
    return;
  }

  const Slide = slideMap[alias];
  return ReactDOMServer.renderToString(<Slide {...data} />);
}

export default renderTemplate;
