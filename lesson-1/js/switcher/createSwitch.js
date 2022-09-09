import { capitalize } from '../utils';
import { initMap } from './constants.js';

export const createSwitch = (currentForm) => {
  const switchElement = document.createElement('li');
  switchElement.className = 'switch';

  switchElement.innerText = currentForm.id
    .split('_')
    .map((elem) => capitalize(elem))
    .join(' ');

  switchElement.onclick = () => {
    const outdatedActiveForm = document.querySelector('.active');
    if (outdatedActiveForm) {
      outdatedActiveForm.className = 'hidden';
    }
    currentForm.className = 'active';

    const outdatedActiveSwitch = document.querySelector('.switch_active');
    if (outdatedActiveSwitch) {
      outdatedActiveSwitch.className = 'switch';
    }
    switchElement.className = 'switch_active';

    initMap.get(currentForm.id)(currentForm);
  };

  return switchElement;
}

