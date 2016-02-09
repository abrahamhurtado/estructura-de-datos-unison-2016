var swap = require('./swap');

function bubblesort (array) {

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        swap(array, j, i);
      }
    }
  }

  return array;
}

module.exports = bubblesort;
