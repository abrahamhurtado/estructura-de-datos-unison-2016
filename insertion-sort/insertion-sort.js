function insertionSort (array) {
  for (var i = 1; i < array.length; i++) {
    var temporal = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temporal) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temporal;
  }
  return array;
}

module.exports = insertionSort;
