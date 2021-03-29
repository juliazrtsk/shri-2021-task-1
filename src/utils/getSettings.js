import { screenOrientation } from 'src/constants/constants';

export const getSettings = () => {
  const params = new URLSearchParams(window.location.search);
  const slide = params.get('slide') || 1;
  const theme = params.get('theme') || 'dark';
  return { slide, theme };
};

export const getScreenOrientation = () => {
  if (window.innerHeight > window.innerWidth) {
    return screenOrientation.vertical;
  } else return screenOrientation.horizontal;
};
