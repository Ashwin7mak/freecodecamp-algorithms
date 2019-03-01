function steamrollArray(arr) {
    // Concat given array with an empty array
    let flatten = [].concat(...arr);
    // Check if the array contains any array 
    // If so do recursion of that array else return the array
    return flatten.some(Array.isArray) ? steamrollArray(flatten) : flatten;
}
