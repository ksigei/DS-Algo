// O(n^2) - Quadratic time:

function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                duplicates.push(arr[i]);
                break;
            }
        }
    }
    // return duplicates;
    console.log(duplicates);
}

findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);