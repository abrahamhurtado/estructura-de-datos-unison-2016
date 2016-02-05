function mean1 (array) {
  var suma = 0;

  array.forEach(numero => suma += numero);

  return suma/array.length;
}

function mean2 (array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

module.exports = {
  meanForEach: mean1,
  meanReduce: mean2
}
