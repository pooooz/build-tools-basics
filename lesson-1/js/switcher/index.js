import { createSwitch } from './createSwitch.js';

export class Switcher {
  list = document.createElement('ul');

  constructor(rootElement) {
    this.root = rootElement;
    const formsArray = [...document.forms];

    formsArray.forEach((formElement) => {
      this.list.append(createSwitch(formElement));
    });
  }

  render() {
    this.root.prepend(this.list);
  }
}