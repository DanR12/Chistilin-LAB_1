// Функція для обчислення суми квадратів цифр числа
function sumOfDigitSquares(num) {
    let sum = 0;
    while (num) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Цикл перебору чисел
for (let i = 10; i < 100; i++) {
    // Перевірка чи ділиться на 13?
    if (sumOfDigitSquares(i) % 13 === 0) {
        console.log(i);
    }
}