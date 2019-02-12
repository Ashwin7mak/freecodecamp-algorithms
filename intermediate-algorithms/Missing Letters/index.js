function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        // Check if the ASCII values of alphabets differ by 1 or not
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            // Return String of the ASCII value of the next character
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}
