import { printError, printResult } from '../utils/printResult.js';
import { getDateDiff } from './getDateDiff.js';

const result = document.querySelector('#output');

export const setDateForm = (formElement) => {
  if (formElement.tagName === 'FORM') {
    formElement.onsubmit = (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);

      const firstInput = formData.get('firstDate');
      const secondInput = formData.get('secondDate');

      const dateDiff = getDateDiff(firstInput, secondInput);

      if (!firstInput || !secondInput) {
        printError(result, 'Заполните поля с датами!');
      } else {
        printResult(result, dateDiff);
      }
    };
  } else {
    throw new Error('The passed element must be a form');
  }
}
