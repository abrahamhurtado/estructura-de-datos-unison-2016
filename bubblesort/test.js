var test = require('ava');
var bubblesort = require('./bubblesort');

test('Bubblesort: se deben ordenar los elementos del array [-3, -7, 8, 0, 4] de menor a mayor', t => {
  const actual = bubblesort([-3, -7, 8, 0, 4]);
  const esperado = [-7, -3, 0, 4, 8];

  t.same(actual, esperado, 'bubblesort funcionó');
})
