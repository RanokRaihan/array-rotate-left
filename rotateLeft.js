function rotateLeft(array, n) {
  //copy the array for non destructive oparation
  const arrayCopy = [...array];
  for (let i = 0; i < n; i++) {
    let first = arrayCopy.shift();
    arrayCopy.push(first);
  }
  return arrayCopy;
}

const result = rotateLeft([1, 2, 3, 4, 5, 6], 4);
console.log(result);
