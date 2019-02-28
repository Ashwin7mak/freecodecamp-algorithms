function sumFibs(num) {
    let firstNum = 0, secondNum = 1, result = 0;

    while(secondNum <= num) {
        if(secondNum % 2 !== 0) {
            result += secondNum;
        }

        secondNum += firstNum;
        firstNum = secondNum - firstNum;

    }

    return result;
}