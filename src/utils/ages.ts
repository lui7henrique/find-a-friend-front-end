const MAX_AGE = 30;

export const ageOptions = Array.from({ length: MAX_AGE + 1 }).map((_, i) => {
  return {
    value: String(i),
    label: String(i),
  };
});
