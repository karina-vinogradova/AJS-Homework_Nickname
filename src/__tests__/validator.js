import Validator from '../validator';

test.each([
  ['Test', true],
  ['Ваня', false],
  ['_NickName-123test', false],
  ['123test', false],
  ['12345', false],
  ['-Oleg', false],
  ['Oleg-', false],
  ['Oleg-1a', true],
  ['Oleg-1', false],
])('checked different user nicknames', (name, expected) => {
  const user = new Validator(name);
  const result = user.validateUsername();
  expect(result).toBe(expected);
});
