import { Switcher } from './switcher';
import css from '../styles/styles.css';
import sound from '../assets/sounds/sound.wav'

const errorHeading = document.querySelector('#error');
const rootElement = document.querySelector('body');

try {
  const switcher = new Switcher(rootElement);
  switcher.render();
} catch (error) {
  console.error(error);
  errorHeading.innerText = error.message;
}

