function selectionSort (array) {
  var minimo, temp;

  for (var i = 0; i < array.length; i++) {
    minimo = i;
    for (var j = i + 1 ; j < array.length; j++) {
      if (array[j] < array[minimo]) {
        minimo = j;
      }
    }
    swap(array, i, minimo);
  }

  return array;

}

function swap (array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

module.exports = selectionSort;
