//❓Если задана строка, все гласные должны быть написаны заглавными.
//
// Например:
//
// Ввод: "Hello World!"
//
// Вывод: "Привет, мир!"
//
// Примечание: в этой ката буква Y не является гласной.

// ✅ SOLUTION:
function swap (string) {
    const glasn = ["a", "e", "i", "o", "u"]
    return string.split("").map(el => glasn.includes(el) ? el.toUpperCase() : el ).join("")
}

console.log(swap("Hello World"))
