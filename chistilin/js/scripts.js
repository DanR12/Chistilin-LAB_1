
function checkCollinear(x1, y1, x2, y2, x3, y3) {


    if ((x1 - x2) * (y2 - y3) == (x2 - x3) * (y1 - y2)) {
        console.log("Точки лежать на одній прямій");
    } else {
        console.log("Точки не лежать на одній прямій");
    }
}


function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}


function inputNumber(promptMessage) {
    let input;
    do {
        input = parseFloat(prompt(promptMessage));
    } while (!isNumber(input));
    return input;
}
let x1 = inputNumber("Введіть координату x1:");
let y1 = inputNumber("Введіть координату y1:");
let x2 = inputNumber("Введіть координату x2:");
let y2 = inputNumber("Введіть координату y2:");
let x3 = inputNumber("Введіть координату x3:");
let y3 = inputNumber("Введіть координату y3:");
checkCollinear(x1, y1, x2, y2, x3, y3);