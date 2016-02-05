var test = require('ava');
var isEven = require('./median').isEven;
var median = require('./median').median;

test('Checando si cada uno de los elementos del arreglo [0, 1, 2, 3, 4] es par, deberíamos obtener [true, false, true, false, true]', t => {
  const actual = [0, 1, 2, 3, 4].map(isEven);
  const expected = [true, false, true, false, true];

  t.same(actual, expected);
});

test('Dado el arreglo [5, 3, 1, 4, 2], la mediana debe ser 3', t => {
  const actual = median([5, 3, 1, 4, 2]);
  const expected = 3;

  t.is(actual, expected);
});

test('Dado el arreglo [6, 4, 2, 5, 1, 3], la mediana debe ser 3.5', t => {
  const actual = median([6, 4, 2, 5, 1, 3]);
  const expected = 3.5;

  t.is(actual, expected);
});
