//❓Это простой вариант примера ката (предоставленного Codewars при обучении созданию собственных ката).
//
// Добавьте значение "codewars" в массив websites1000 раз.

// ✅ SOLUTION:
let websites = []

while (websites.length < 1000) {
    websites.push("codewars");
}



console.log(addCodewars(websites, 100))
