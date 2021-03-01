import './_variables.css';
import './index.css';

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const slide = params.get('slide') || 1;
  const theme = params.get('theme') || 'light';
  console.log(`slide: ${slide}; theme: ${theme}`);
}
