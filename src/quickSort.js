// Quick Sort

function quickSort(items, left, right) {
    let i = left;
    let j = right;
    
    const pivotIndex = Math.floor((left + right) / 2);
    const pivot = items[pivotIndex];
    
    while (i <= j) {
        while (items[i] < pivot) i++;
        
        while (items[j] > pivot) j--;
        
        if (i <= j) {
            // swap elemenet
            let tmp = items[j];
            items[j] = items[i];
            items[i] = tmp;
            
            i++;
            j--;
        }
    }
    
    if (left < j) {
        quickSort(items, left, j);
    }
    
    if (right > i) {
        quickSort(items, i, right);
    }
    
    return items;
}

module.exports = quickSort;
