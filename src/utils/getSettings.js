export const getSettings = () => {
  const params = new URLSearchParams(window.location.search);
  const slide = params.get('slide') || 1;
  const theme = params.get('theme') || 'dark';
  return { slide, theme };
};
