export const printError = (element, errorText) => {
  element.innerText = errorText;
};

export const printResult = (element, { years, months, days }) => {
  element.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`;
} ;

export const printTime = (element, timeString) => {
  element.innerText = timeString;
}
