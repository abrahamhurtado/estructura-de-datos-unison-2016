var test = require('ava');
var meanForEach = require('./mean').meanForEach;
var meanReduce = require('./mean').meanReduce;

test('La media aritmética, independientemente del procedimiento, debe ser la misma', t => {
  const actualForEach = meanForEach([1,2,3,4,5,6,7,8,9]);
  const actualReduce = meanReduce([1,2,3,4,5,6,7,8,9]);

  t.same(actualReduce, actualForEach);
});

test('Como no hay diferencia entre los procedimientos, dado el arreglo [1,2,3,4,5,6,7,8,9], la media aritmética debe ser 5', t => {
  const actual = meanForEach([1,2,3,4,5,6,7,8,9]);
  const expected = 5;

  t.same(actual, expected);
});
