var flatten = require('./flatten');
var createList = require('./createList');

function radixSort (array, list, modulo, divisor) {
  var newList = createList();

  if (list[0].length >= array.length) {
    return array;
  }

  array.forEach((elemento) => {
    var residuo = elemento % modulo;
    var posicion = parseInt(residuo / divisor);

    newList[posicion].push(elemento);
  });

  return radixSort(
    flatten(newList),
    newList,
    modulo * 10,
    divisor * 10
  );
}

module.exports = radixSort;
