function pairElement(str) {
    str = str.split("");
    
    // Object with the paired of characters
    let pairs = {
        "A": "T",
        "T": "A",
        "G": "C",
        "C": "G"
    };

    // Map through corresponding characters into an array
    return str.map((x) => {
        return [x, pairs[x]];
    });
    
}