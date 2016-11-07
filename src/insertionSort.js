// Insertion Sort

function insertionSort(list) {
    const listLength = list.length;
    
    for (let i = 0; i <= list.length -1; i++) {
        let j = i;
        while (j > 0 && list[j - 1] > list[j]) {
            let tmp = list[j - 1];
            list[j - 1] = list[j];
            list[j] = tmp;
            j--;
        }
    }
    
    return list;
}

module.exports = insertionSort;
