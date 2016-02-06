var test = require('ava');
var insertionSort = require('./insertion-sort');

test('Insertion Sort: Dado el arreglo [4, 22, -59, 1, 8, 9, -7], debemos obtener [-59, -7, 1, 4, 8, 9, 22]', (t) => {
  const actual = insertionSort([ 4, 22, -59, 1, 8, 9, -7 ]);
  const expected = [ -59, -7, 1, 4, 8, 9, 22 ];

  t.same(actual, expected);
});
