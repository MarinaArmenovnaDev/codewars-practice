//❓Дана строка s. Напишите метод (функцию), который будет возвращать true, если это допустимое целое число или число с плавающей запятой, или false, если это не так.
//
// Допустимые примеры, должны возвращать true:
//
// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")

// должно вернуть false:
//
// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

// ✅ SOLUTION:
function isDigit(s) {
   const num  = Number(s)
    return !isNaN(num) && isFinite(num) && s.trim() !== '';
}

console.log(isDigit("3"))
