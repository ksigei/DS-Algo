// O(n^2) - Quadratic time:

function findDuplicates(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] === array[j] && i !== j) {
        console.log(array[i]);
      }
    }
  }
}

findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);