function countDigitsMultipleOfN(number, N) {
    let count = 0;
    let numberString = number.toString();
    for (let i = 0; i < numberString.length; i++) {

        let digit = parseInt(numberString[i]);
        

        if (digit % N === 0) {
            count++;
        }
    }
    return count;
}
let number = 123456789;
let N = 3;
let count = countDigitsMultipleOfN(number, N);
console.log("Кількість цифр у числі, кратних", N, ":", count);