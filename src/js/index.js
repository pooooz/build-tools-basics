import { Switcher } from './switcher';
import css from '../styles.css';
import sound from '../sound.wav'

const errorHeading = document.querySelector('#error');
const rootElement = document.querySelector('body');

try {
  const switcher = new Switcher(rootElement);
  switcher.render();
} catch (error) {
  console.error(error);
  errorHeading.innerText = error.message;
}

