export const convertTimeStringToSeconds = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  return Number(hours) * 3600 + Number(minutes) * 60;
};