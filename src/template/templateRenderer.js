import './style.css';

export function renderTemplate (alias, data) {
  return (
    `<div class="slide">
       <div class="slide__header">
         <h1 class="slide__title">${data.title}</h1>
         <h3 class="slide__subtitle">${data.subtitle}</h3>
       </div>
       <div class="slide__content">
         
       </div>
    </div>`
  );
}
