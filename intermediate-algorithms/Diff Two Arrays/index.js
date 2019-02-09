function diffArray(arr1, arr2) {

    // Filter the elements in arr1 that are not present in arr2
    let a1 = arr1.filter(el => !arr2.includes(el));
    // Filter the elements in arr2 that are not present in arr1
    let a2 = arr2.filter(el => !arr1.includes(el));
    // Concatenate both the arrays
    return a1.concat(a2);
}