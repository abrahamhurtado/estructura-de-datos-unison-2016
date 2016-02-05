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

function swap (array, i, j) {
  var temp = array[j];
  array[j] = array[i];
  array[i] = temp;
  return array;
}

module.exports = bubblesort;

// bubblesort([-3,-7,4,0,8])
