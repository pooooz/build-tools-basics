import { Switcher } from "./switcher";

const errorHeading = document.querySelector('#error');
const rootElement = document.querySelector('body');

try {
  const switcher = new Switcher(rootElement);
  switcher.render();
} catch (error) {
  console.error(error);
  errorHeading.innerText = error.message;
}

