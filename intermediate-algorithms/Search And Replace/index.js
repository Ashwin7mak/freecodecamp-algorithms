function myReplace(str, before, after) {
    // Find the index of the before word in the str array
    let index = str.indexOf(before);
    // Check if the Starting letter of the before word is in UpperCase or not
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    
    str = str.replace(before, after);

    return str;

}