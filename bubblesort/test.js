var test = require('ava');
var bubblesort = require('./bubblesort');
var swap = require('./swap');

test('Dado [1, 2], swap() debe regresar [2, 1]', (t) => {
  const actual = swap([ 1, 2 ], 0, 1);
  const expected = [ 2, 1 ];

  t.same(actual, expected);
});

test('Bubblesort: se deben ordenar los elementos del array [-3, -7, 8, 0, 4] de menor a mayor', (t) => {
  const actual = bubblesort([ -3, -7, 8, 0, 4 ]);
  const esperado = [ -7, -3, 0, 4, 8 ];

  t.same(actual, esperado, 'bubblesort funcionó');
});
