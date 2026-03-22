//❓« Упорядоченное число» — это число, цифры которого расположены в порядке убывания .
//
// Задача
// Дано число, определите, является ли оно аккуратным или нет.
//
// Примечания
// Пройденное число всегда будет положительным .
// Возвращает результат в виде логического значения .
// Примеры
// 12 ==> return true
// Explanation: Digits {1, 2} are in non-decreasing order (1 <= 2).
//
// 32 ==> return false
// Explanation: Digits {3, 2} are not in non-decreasing order (3 > 2).
//
// 1024 ==> return false
// Explanation: Digits {1, 0, 2, 4} are not in non-decreasing order (1 > 0).
//
// 13579 ==> return true
// Explanation: Digits {1, 3, 5, 7, 9} are in non-decreasing order.
//
// 2335 ==> return true
// Explanation: Digits {2, 3, 3, 5} are in non-decreasing order (3 = 3).

// ✅ SOLUTION:
function tidyNumber(n){
const arr = n.toString().split('');
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false
}
    return true
}

console.log(tidyNumber(1218))
