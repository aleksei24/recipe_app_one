import { APP, MEALS } from './view';

const appStyle = (el) => {
  const bgColour = 'fff';

  el.style.width = '24em';
  el.style.margin = '0 auto';
  el.style.padding = '0.5em';
  el.style.minHeight = '100vh';
  el.style.backgroundColor = bgColour;
};

appStyle(APP);
