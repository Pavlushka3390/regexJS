import Valdiator from '../validator';

const USERNAMES_DATA = [
  ['_vasya', false],
  ['1234', false],
  ['3', false],
  ['vasya66s', true],
  ['vasya6', false],
  ['vasya1234', false],
  ['vas6667ya', false],
  ['vasy-yas', true],
  ['vasy_yas', true],
];

const userNameHandler = test.each(USERNAMES_DATA);

userNameHandler('test username %s', (userName, expected) => {
  const result = Valdiator.validateUsername(userName);
  expect(result).toEqual(expected);
});