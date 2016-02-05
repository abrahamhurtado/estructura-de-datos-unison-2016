function meanForEach (array) {
  var suma = 0;

  array.forEach((numero) => suma += numero);

  return suma / array.length;
}

function meanReduce (array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

module.exports = {
  meanForEach,
  meanReduce
};
