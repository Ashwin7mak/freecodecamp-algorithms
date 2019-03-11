function sumPrimes(num) {
    // Check if number is less than 1 and return 0
    if (num <= 1) {
        return 0;
    }

    // Function to check a number is prime or not
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0 && num != i) {
                return false;
            }
        }
        return true;
    }

    // Recursive approach to add prime numbers
    if (isPrime(num) === false) {
        return sumPrimes(num - 1);
    } else {
        return num + sumPrimes(num - 1);
    }
}