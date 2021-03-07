import leadersSlide from '../slides/leaders/leadersSlide';

import './style.css';

export async function renderTemplate (alias, data) {
  /* Todo: add selection of render function depending on alias */
  const renderedContent = await leadersSlide(data);
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
