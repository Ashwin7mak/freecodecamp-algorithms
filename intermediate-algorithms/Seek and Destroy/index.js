function destroyer(arr) {
    // Convert arguments object into array
    var args = Array.prototype.slice.call(arguments);

    // Filter array with the values that are not present in args
    // Filter array elements not in args list 
    let res = arr.filter((val) => {
        return !args.includes(val);
    })
    return res;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);