export const convertSecondsToTimeString = (seconds) => {
  const hours = Math.trunc(seconds / 3600);
  const minutes = Math.trunc((seconds - hours * 3600) / 60);
  const secondsLeft = seconds - hours * 3600 - minutes * 60;

  const stringHours = hours < 10 ? `0${hours}` : `${hours}`;
  const stringMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const stringSeconds = secondsLeft < 10 ? `0${secondsLeft}` : `${secondsLeft}`;

  return `${stringHours}:${stringMinutes}:${stringSeconds}`;
};