export const BASE_SIZE = 16;

export const responsiveSize = (size, settings = { units: true }) =>
  `${Math.round((size / BASE_SIZE) * 100) / 100}${settings.units ? "rem" : ""}`;
