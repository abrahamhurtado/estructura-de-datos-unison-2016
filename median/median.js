var selectionSort = require('../selection-sort/selection-sort');

function isEven (number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

function median (array) {
  selectionSort(array);

  var halfPosition = parseInt((array.length + 1)/2);

  if (isEven(array.length)) {
    return (array[halfPosition] + array[halfPosition - 1])/2;
  } else {
    return array[halfPosition - 1];
  }

}

module.exports = {
  isEven: isEven,
  median: median
}
