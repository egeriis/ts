export const TRIANGLE_TYPE_EQUILATERAL = 'equilateral';
export const TRIANGLE_TYPE_ISOSCELES = 'isosceles';
export const TRIANGLE_TYPE_SCALENE = 'scalene';

const isFiniteAndPositive = no => Number.isFinite(no) && no > 0;
const isValidTriangle = (a, b, c) => {
  const long = Math.max.apply(Math, [a, b, c]);
  const rest = a + b + c - long;
  return rest > long;
};

export const triangleType = (a, b, c) => {
  if ([a, b, c].every(isFiniteAndPositive) === false) {
    throw new Error('All arguments must be positive numbers');
  }

  if (isValidTriangle(a, b, c) === false) {
    throw new Error('Invalid triangle');
  }

  if (a === b && b === c) {
    return TRIANGLE_TYPE_EQUILATERAL;
  }

  if (a === b || b === c || c === a) {
    return TRIANGLE_TYPE_ISOSCELES;
  }

  return TRIANGLE_TYPE_SCALENE;
};
