function swap (array, i, j) {
  var temp = array[j];
  array[j] = array[i];
  array[i] = temp;
  return array;
}

module.exports = swap;
