var test = require('ava');
var selectionSort = require('./selection-sort');
var swap = require('./swap');

test('Dado [1, 2], swap() debe regresar [2, 1]', (t) => {
  const actual = swap([ 1, 2 ], 0, 1);
  const expected = [ 2, 1 ];

  t.same(actual, expected);
});

test('selection-sort: se deben ordenar los elementos del array [-3, -7, 8, 0, 4] de menor a mayor', (t) => {
  const actual = selectionSort([ -3, -7, 8, 0, 4 ]);
  const expected = [ -7, -3, 0, 4, 8 ];

  t.same(actual, expected, 'selectionSort funcionó');
});
