var test = require('ava');
var radixSort = require('./radix-sort');
var flatten = require('./flatten');
var createList = require('./createList');


test('createList() debe regresar un arreglo de tamaño 10', (t) => {
  const actual = createList();
  const expected = 10;

  t.is(actual.length, expected);
});

test('El arreglo que regresa createList() debe contener 10 arreglos', (t) => {
  const actual = createList();
  const expected = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];

  t.same(actual, expected);
});

test('El arreglo [1,[2,[3,[4]]]] debe resultar en [1, 2, 3, 4] tras aplicarle flatten()', (t) => {
  const actual = flatten([ 1, [ 2, [ 3, [ 4 ] ] ] ]);
  const expected = [ 1, 2, 3, 4 ];
  t.same(actual, expected);
});

test('El arreglo [109, 17, 89, 4, 58] debe acomodarse en [4, 17, 58, 89, 109] tras aplicarle radixSort()', (t) => {
  const actual = radixSort(
    [ 109, 17, 89, 4, 58 ],
    createList(),
    10,
    1
  );
  const expected = [ 4, 17, 58, 89, 109 ];
  t.same(actual, expected);
});
