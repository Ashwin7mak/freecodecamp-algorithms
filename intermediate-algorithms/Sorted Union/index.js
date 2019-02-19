function uniteUnique(arr) {
    let res = [];
    let i = 0;

    // Pushing all arguments into an array
    while (arguments[i]) {
        res = res.concat(arguments[i]);
        i++;
    }

    // Filtering only the arguments which are present in all the arrays
    let sortedUnion = res.filter((val, i) => {
        return res.indexOf(val) == i;
    });

    return sortedUnion;
}