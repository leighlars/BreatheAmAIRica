export const degToDirection = (deg: number): string => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
  return directions[index];
};

export const kelvinToFahren = (k: number): number => {
  return Math.floor((k - 273.15) * 1.8 + 32);
};
