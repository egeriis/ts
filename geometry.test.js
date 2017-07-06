import {
  TRIANGLE_TYPE_EQUILATERAL,
  TRIANGLE_TYPE_ISOSCELES,
  TRIANGLE_TYPE_SCALENE,
  triangleType,
} from './geometry';

test('correctly identifies triangle type', () => {
  expect(triangleType(Math.PI, Math.PI, Math.PI)).toBe(TRIANGLE_TYPE_EQUILATERAL);
  expect(triangleType(Math.PI, Math.PI, Math.E)).toBe(TRIANGLE_TYPE_ISOSCELES);
  expect(triangleType(Math.PI, Math.E, Math.LN2)).toBe(TRIANGLE_TYPE_SCALENE);
});

test('throws errors when passing non-numbers', () => {
  expect(() => triangleType(Math.PI, Math.PI, 'shift happens')).toThrow();
  expect(() => triangleType(Math.PI, 'shift happens', Math.PI)).toThrow();
  expect(() => triangleType('shift happens', Math.PI, Math.PI)).toThrow();
});

test('throws errors when passing zero or negative numbers', () => {
  expect(() => triangleType(Math.PI, Math.PI, 0)).toThrow();
  expect(() => triangleType(Math.PI, -1 * Math.PI, Math.PI)).toThrow();
});

test('throws error when passing invalid side lengths', () => {
  expect(() => triangleType(5, 7, 12)).toThrow();
  expect(() => triangleType(1, 1, 5)).toThrow();
});
