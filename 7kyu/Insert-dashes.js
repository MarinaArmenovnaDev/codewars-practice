//❓Напишите функцию, которая принимает целое число num( num >= 0) и вставляет дефисы ( '-') между каждой парой нечетных цифр в num.
//
// Примеры
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"

// ✅ SOLUTION:
function insertDash(num) {
    let str = num.toString();
    let result = [];

    for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
        if (i < str.length - 1 &&
            parseInt(str[i]) % 2 === 1 &&
            parseInt(str[i + 1]) % 2 === 1) {
            result.push('-');
        }
    }

    return result.join('');

}

console.log(insertDash(13579))
