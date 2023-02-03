
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []

  return matrix.reduce((acc, el, i) => (i % 2 !== 0 ? acc.concat(el.reverse()) : acc.concat(el)), [])
}

