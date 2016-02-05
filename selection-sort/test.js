var test = require('ava');
var selectionSort = require('./selection-sort');

test('selection-sort: se deben ordenar los elementos del array [-3, -7, 8, 0, 4] de menor a mayor', (t) => {
  const actual = selectionSort([ -3, -7, 8, 0, 4 ]);
  const expected = [ -7, -3, 0, 4, 8 ];

  t.same(actual, expected, 'selectionSort funcionó');
});
