import { add } from '../src/index';

test('should add two numbers', () => {
  expect(add(2, 1)).toEqual(3);
});
