
var N = prompt("Введіть число N:");
if (isNaN(N) || N <= 0) {
    console.log("Введіть коректне натуральне число!");
} else {
    var sum = 0;
    var count = 0;
    for (var i = 1; i < N; i++) {
        if (i % 5 === 0 && i % 7 !== 0) {
            sum += i;
            count++;
        }
    }
    console.log("Кількість чисел, які діляться на 5 і не діляться на 7:", count);
    console.log("Сума таких чисел:", sum);
}
