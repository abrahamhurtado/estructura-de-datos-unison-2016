var swap = require('./swap');

function selectionSort (array) {
  var minimo = 0;

  for (var i = 0; i < array.length; i++) {
    minimo = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimo]) {
        minimo = j;
      }
    }
    swap(array, i, minimo);
  }

  return array;

}

module.exports = selectionSort;
