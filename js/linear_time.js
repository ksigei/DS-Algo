function findValue(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
    //   return i;
    console.log(i);
    }
  }
  return -1;
//   console.log(-1);
}

findValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);