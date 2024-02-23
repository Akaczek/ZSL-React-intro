export const getCurrentHour = (date, timezone) => {
  return (date.getHours() - 1 + 24 + timezone) % 12;
}