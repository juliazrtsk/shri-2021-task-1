import back0 from './svg isometric chart/0/Back.svg';
import top0 from './svg isometric chart/0/Top.svg';
import right0 from './svg isometric chart/0/Right.svg';
import back1 from './svg isometric chart/1-2/Back.svg';
import back3 from './svg isometric chart/3-4/Back.svg';
import back5 from './svg isometric chart/5-6/Back.svg';

import './style.css';

export default function activitySlide(data) {
  // <img class="chart" src="${back0}" alt="back"/>
  // 1. Разобраться с тем, как устроены path
  // 2. Скруглить края
  // 3. Применить CSS с градиентами, тенями и размытием
  // 4. Сделать рендер большого количества кубов
  // 5. Сделать высоту, опирающуюся на данные
  return(`
    <div class="activity">
    <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="white" stop-opacity="0" />
      <stop offset="1" stop-color="white" stop-opacity="1" />
    </linearGradient>
    <mask id="Mask">
      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  />
    </mask>
  </defs>

  <rect x="0" y="0" width="200" height="200" fill="green" />
  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
</svg>


<svg version="1.1"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     class="back"
>
    <path d="M 0.266602 16.3178
             L 22.1333 -0.403809
             L 43.9999 16.3178
             V 26.608
             L 22.1333 43.3295
             L 0.266602 26.608
             V 16.3178
             Z
    "
          fill="url(#min_back__gradient)"
          fill-opacity="0.65"
          
    />
    <defs>
        <radialGradient id="min_back__gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.2173 33.8323) rotate(-156.928) scale(99.4131 2204.57)">
            <stop stop-color="#131110"/>
            <stop offset="1"/>
        </radialGradient>
    </defs>
</svg>

    </div>
  `);
}
