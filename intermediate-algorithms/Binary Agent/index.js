function binaryAgent(str) {
    // Split by spaces
    // Convert the binary string to string using map function
    return str.split(/\s/).map(function (val) {
        return String.fromCharCode(parseInt(val, 2));
    }).join("");
}
