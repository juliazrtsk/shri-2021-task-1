import leadersSlide from '../slides/leaders/leadersSlide';
import voteSlide from '../slides/vote/voteSlide';
import activitySlide from '../slides/activity/activitySlide';

import './style.css';

const aliases = {
  leaders: 'leaders',
  vote: 'vote',
  chart: 'chart',
  diagram: 'diagram',
  activity: 'activity',
};

const slideMap = {
  [aliases.leaders]: (data) => leadersSlide(data),
  [aliases.vote]: (data) => voteSlide(data),
  [aliases.chart]: (data) => {},
  [aliases.diagram]: (data) => {},
  [aliases.activity]: (data) => activitySlide(data),
};

export async function renderTemplate (alias, data) {
  if (!aliases[alias]) {
    console.error('Not found');
    return;
  }
  const renderSlide = slideMap[alias];
  const renderedContent = await renderSlide(data);
  return (
    `<div class="slide">
       <div class="slide__header">
         <h1 class="slide__title">${data.title}</h1>
         <h3 class="slide__subtitle">${data.subtitle}</h3>
       </div>
       <div class="slide__content">
         ${renderedContent}
       </div>
    </div>`
  );
}
