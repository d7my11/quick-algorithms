// Bubble Sort

function bubbleSort(items) {
    const itemsLength = items.length;
    
    for(let i = itemsLength - 1; i >= 0; i--) {
        for (let j = itemsLength - i; j >= 0; j--) {
            if (items[j] > items[j + 1]) {
                // swap elements
                let tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }
    
    return items;
}

module.exports = bubbleSort;
