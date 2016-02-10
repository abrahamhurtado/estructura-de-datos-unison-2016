function populateList (array, list, modulo, divisor) {
  array.forEach((elemento) => {
    var residuo = elemento % modulo;
    var posicion = parseInt(residuo / divisor);

    list[posicion].push(elemento);
  });

  return list;
}

module.exports = populateList;
