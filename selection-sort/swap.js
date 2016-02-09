function swap (array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

module.exports = swap;
