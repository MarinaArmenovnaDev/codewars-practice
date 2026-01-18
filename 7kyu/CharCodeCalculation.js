//❓Дана строка. Преобразуйте каждый символ в его ASCII-код и объедините их, чтобы получить число — назовем это число total1:
//
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Затем замените любое вхождение этого числа 7на число 1, и назовите это число 'total2':
//
// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Затем верните разницу между суммой цифр в total1и total2:
//
//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// ✅ SOLUTION:
function calc(x) {
    const total1 = x.split("").map(el => el.charCodeAt(0)).join("")
    const total2 = total1.split("").map(el => el === "7" ? "1" : el).join("")
    const sumDigits = str => str.split("").reduce((sum, digit) => sum + Number(digit), 0);
    const sum1 = sumDigits(total1);
    const sum2 = sumDigits(total2);

    return sum1 - sum2;
}

console.log(calc('jfmgklf8hglbe'))
