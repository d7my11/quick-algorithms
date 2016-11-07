// Bubble Sort

function bubbleSort(list) {
    const listLength = list.length;
    
    for(let i = listLength - 1; i >= 0; i--) {
        for (let j = listLength - i; j >= 0; j--) {
            if (list[j] > list[j + 1]) {
                // swap elements
                let tmp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tmp;
            }
        }
    }
    
    return list;
}

module.exports = bubbleSort;
