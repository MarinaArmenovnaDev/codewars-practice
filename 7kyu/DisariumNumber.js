//❓Число Дисариум — это число, сумма цифр которого, возведенных в степень и занимающих соответствующие позиции, равна самому числу .
//
// Задача
// Дано число. Определите, является ли оно «Дисариумом» или нет .

// ✅ SOLUTION:
function disariumNumber(n){
const numStr = n.toString();
let sum = 0
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i], 10);

        const position = i + 1;

        sum += Math.pow(digit, position);
    }
    return sum === n ? 'Disarium !!' : "Not !!"
}

console.log(disariumNumber(135));
