import { convertTimeStringToSeconds } from './convertTimeStringToSeconds.js';
import { convertSecondsToTimeString } from './convertSecondsToTimeString.js';
import { printError, printTime } from '../utils/printResult.js';

const stopButton = document.querySelector('#stop');
const result = document.querySelector('#waiting');

export const setTimerForm = (formElement) => {
  let isActiveTimer = false;
  let timerId;

  if (formElement.tagName === 'FORM') {
    formElement.onsubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      const timeString = formData.get('timeInput');

      let converted = convertTimeStringToSeconds(timeString);

      if (!timeString) {
        printError(result, 'Enter time!');
        return;
      }

      if (timerId && isActiveTimer) {
        printError(result, 'Timer already set');
        return;
      }

      timerId = setInterval(() => {
        if (converted <= 0) {
          clearInterval(timerId);
          const sound = new Howl({
            src: './sound.wav'
          });
          sound.play();

          isActiveTimer = false;
        }

        const time = convertSecondsToTimeString(converted);
        converted -= 1;

        printTime(result, time);
      }, 1000);
    };
  } else {
    throw new Error('The passed element must be a form');
  }

  stopButton.onclick = () => {
    if (timerId) {
      clearInterval(timerId);
      isActiveTimer = false;
    }
  }
}