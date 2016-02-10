var flatten = require('./flatten');
var createList = require('./createList');
var populateList = require('./populateList');

function radixSort (array, list, modulo, divisor) {

  if (list[0].length >= array.length) {
    return array;
  }

  var newList = populateList(
    array,
    createList(),
    modulo,
    divisor
  );

  return radixSort(
    flatten(newList),
    newList,
    modulo * 10,
    divisor * 10
  );
}

module.exports = radixSort;
