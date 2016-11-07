// Merge Sort

function merge(left, right) {
    let sortedList = [];
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedList.push(left.shift());
        } else {
            sortedList.push(right.shift());
        }
    }
    
    while (left.length) {
        sortedList.push(left.shift())
    }
    
    while (right.length) {
        sortedList.push(right.shift())
    }
    
    return sortedList;
}


function mergeSort(list) {
    if (list.length < 2) return list;
    
    let middle = Math.floor(list.length / 2);
    let left = list.slice(0, middle);
    let right = list.slice(middle, list.length);
    
    return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;