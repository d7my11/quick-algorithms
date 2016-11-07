// Insertion Sort

function insertionSort(items) {
    const itemsLength = items.length;
    
    for (let i = 0; i <= items.length -1; i++) {
        let j = i;
        while (j > 0 && items[j - 1] > items[j]) {
            let tmp = items[j - 1];
            items[j - 1] = items[j];
            items[j] = tmp;
            j--;
        }
    }
    
    return items;
}

module.exports = insertionSort;
