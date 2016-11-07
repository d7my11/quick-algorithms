// Binary Search

function binarySearch(items, target) {
    let min = 0;
    let max = items.length;
    let guess;
    
    while (min <= max) {
        guess = Math.floor((min + max) /2);
        
        if (items[guess] == target) {
            return guess;
        } else if (items[guess] > target) {
            max  = guess -1;
        } else {
            min = guess + 1;
        }
    }
    
    return -1;
}

module.exports = binarySearch;
