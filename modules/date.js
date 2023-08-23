import { DateTime } from './luxon.js';

const time = (element) => {
  setInterval(() => {
    const now = DateTime.now();
    const exactTime = now.toLocaleString({
      month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit',
    });
    element.innerText = exactTime;
  }, 1000);
};

export default time;