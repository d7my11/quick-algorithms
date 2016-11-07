// Quick Sort

function quickSort(list, left, right) {
    let i = left;
    let j = right;
    
    const pivotIndex = Math.floor((left + right) / 2);
    const pivot = list[pivotIndex];
    
    while (i <= j) {
        while (list[i] < pivot) i++;
        
        while (list[j] > pivot) j--;
        
        if (i <= j) {
            // swap elemenet
            let tmp = list[j];
            list[j] = list[i];
            list[i] = tmp;
            
            i++;
            j--;
        }
    }
    
    if (left < j) {
        quickSort(list, left, j);
    }
    
    if (right > i) {
        quickSort(list, i, right);
    }
    
    return list;
}

module.exports = quickSort;
