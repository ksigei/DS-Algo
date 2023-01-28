// O(log n) - Logarithmic time:

function findValue(array, value) {
    let min = 0;
    let max = array.length - 1;
    let guess;
    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        if (array[guess] === value) {
        //   return guess;
        console.log(guess);
        }
        if (array[guess] < value) {
        min = guess + 1;
        } else {
        max = guess - 1;
        }
    }
    return -1;
    // console.log(-1);
}

findValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
