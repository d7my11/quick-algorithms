// Binary Search

function binarySearch(list, target) {
    let min = 0;
    let max = list.length;
    let guess;
    
    while (min <= max) {
        guess = Math.floor((min + max) /2);
        
        if (list[guess] == target) {
            return guess;
        } else if (list[guess] > target) {
            max  = guess -1;
        } else {
            min = guess + 1;
        }
    }
    
    return -1;
}

module.exports = binarySearch;
