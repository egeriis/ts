export const TRIANGLE_TYPE_EQUILATERAL = 'equilateral';
export const TRIANGLE_TYPE_ISOSCELES = 'isosceles';
export const TRIANGLE_TYPE_SCALENE = 'scalene';

const isFiniteAndPositive = no => Number.isFinite(no) && no > 0;

export const triangleType = (a, b, c) => {
  if ([a, b, c].every(isFiniteAndPositive) === false) {
    throw new Error('All arguments must be positive numbers');
  }

  if (a === b && b === c) {
    return TRIANGLE_TYPE_EQUILATERAL;
  }

  if (a === b || b === c || c === a) {
    return TRIANGLE_TYPE_ISOSCELES;
  }

  return TRIANGLE_TYPE_SCALENE;
};
