//❓Завершите функцию, которая преобразует шестнадцатеричное число (заданное в виде строки) в десятичное число.

// ✅ SOLUTION:
function hexToDec(hexString){
return parseInt(hexString, 16);
}

console.log(hexToDec("10"));
