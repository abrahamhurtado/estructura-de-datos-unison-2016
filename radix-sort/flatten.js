var flatten = (x) => x.reduce((xs, xd) => xs.concat(Array.isArray(xd) ? flatten(xd) : xd), []);

module.exports = flatten;
