export function round(number, roundTo = 1.0) {
  const step = 1.0 / roundTo;
  return Math.round(number * step) / step;
}
